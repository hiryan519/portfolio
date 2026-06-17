"use client";

import { useLanguage } from "./language-provider";
import type { Locale } from "@/data/i18n";

export function LanguageToggle() {
  const { content, locale, setLocale } = useLanguage();
  const options: Array<{ label: string; value: Locale }> = [
    { label: "EN", value: "en" },
    { label: "ZH", value: "zh" },
  ];

  return (
    <div
      aria-label={content.language.label}
      className="fixed right-5 top-5 z-[60] flex rounded-full border border-line/70 bg-white/88 p-1 text-xs font-black uppercase tracking-[-0.04em] text-ink shadow-card backdrop-blur-xl"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLocale(option.value)}
          className={`rounded-full px-3 py-2 transition ${
            locale === option.value
              ? "bg-ink text-paper"
              : "text-graphite/58 hover:bg-mist hover:text-ink"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
