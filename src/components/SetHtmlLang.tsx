"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/locales";

export default function SetHtmlLang({ locale }: Readonly<{ locale: Locale }>) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
