"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { i18n, type Content, type Locale } from "@/data/i18n";

type LanguageContextValue = {
  locale: Locale;
  content: Content;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      content: i18n[locale],
      toggleLocale: () => setLocale((current) => (current === "en" ? "zh" : "en")),
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
