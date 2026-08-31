import { z } from "zod";
import { locales } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/dictionary";

export function createContactSchema(errors: Dictionary["contact"]["errors"]) {
  return z.object({
    name: z.string().trim().min(2, errors.nameTooShort).max(100),
    email: z.email(errors.emailInvalid),
    message: z.string().trim().min(10, errors.messageTooShort).max(2000),
    locale: z.enum(locales),
    // honeypot field, real users never fill this in
    company: z.string().max(0).optional(),
  });
}

export type ContactInput = z.infer<ReturnType<typeof createContactSchema>>;
