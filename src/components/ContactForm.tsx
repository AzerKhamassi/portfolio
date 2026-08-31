"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContactSchema, type ContactInput } from "@/lib/contact-schema";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

type Status = "idle" | "success" | "error";

export default function ContactForm({
  dict,
  locale,
}: Readonly<{ dict: Dictionary; locale: Locale }>) {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(createContactSchema(dict.contact.errors)),
    defaultValues: { locale },
  });

  useEffect(() => {
    if (status !== "success") return;
    const timeout = setTimeout(() => setStatus("idle"), 4000);
    return () => clearTimeout(timeout);
  }, [status]);

  const onSubmit = async (data: ContactInput) => {
    setStatus("idle");
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? dict.contact.errors.sendFailed);
      }

      setStatus("success");
      reset({ locale });
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : dict.contact.errors.sendFailed,
      );
    }
  };

  const inputClasses =
    "w-full border-2 border-line bg-paper px-3 py-2 text-sm outline-none placeholder:text-ink-soft/60 focus:translate-x-0.5 focus:-translate-y-0.5 focus:shadow-[3px_3px_0_0_var(--line)] transition-transform";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 flex flex-col gap-4">
      <input type="hidden" {...register("locale")} />

      {/* honeypot field, hidden from real users */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("company")}
      />

      <div>
        <label htmlFor="name" className="text-xs font-bold">
          {dict.contact.nameLabel}
        </label>
        <input
          id="name"
          className={`${inputClasses} mt-2`}
          placeholder={dict.contact.namePlaceholder}
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-accent">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-xs font-bold">
          {dict.contact.emailLabel}
        </label>
        <input
          id="email"
          type="email"
          className={`${inputClasses} mt-2`}
          placeholder={dict.contact.emailPlaceholder}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-accent">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-bold">
          {dict.contact.messageLabel}
        </label>
        <textarea
          id="message"
          rows={5}
          className={`${inputClasses} mt-2 resize-none`}
          placeholder={dict.contact.messagePlaceholder}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-accent">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="retro-shadow-sm mt-2 self-start border-2 border-line bg-accent px-5 py-2 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? dict.contact.sending : dict.contact.send}
      </button>

      {status === "success" && (
        <p className="text-sm text-success">{dict.contact.success}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-accent">{serverError}</p>
      )}
    </form>
  );
}
