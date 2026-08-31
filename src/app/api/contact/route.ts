import { NextResponse } from "next/server";
import { createContactSchema } from "@/lib/contact-schema";
import { getResend } from "@/lib/resend";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale, isLocale } from "@/i18n/locales";
import ContactEmail from "@/emails/contact-email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const rawLocale = body && typeof body === "object" && "locale" in body ? body.locale : null;
  const locale = typeof rawLocale === "string" && isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  const parsed = createContactSchema(dict.contact.errors).safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? dict.contact.errors.invalidInput },
      { status: 400 },
    );
  }

  // honeypot tripped, pretend it worked, drop it silently
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = parsed.data;

  const contactInbox = process.env.CONTACT_EMAIL;
  const fromAddress = process.env.CONTACT_FROM_EMAIL;

  if (!contactInbox || !fromAddress || !process.env.RESEND_API_KEY) {
    console.error(
      "Missing RESEND_API_KEY, CONTACT_EMAIL, or CONTACT_FROM_EMAIL env vars",
    );
    return NextResponse.json(
      { error: dict.contact.errors.notConfigured },
      { status: 500 },
    );
  }

  try {
    const { error } = await getResend().emails.send({
      from: fromAddress,
      to: contactInbox,
      replyTo: email,
      subject: dict.email.subject.replace("{name}", name),
      react: ContactEmail({ name, email, message, locale }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: dict.contact.errors.sendFailed },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Resend threw:", err);
    return NextResponse.json(
      { error: dict.contact.errors.sendFailed },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
