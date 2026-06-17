"use client";

import { useLanguage } from "./language-provider";

export function LanguageToggle() {
  const { content, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      aria-label={content.language.label}
      onClick={toggleLocale}
      className="fixed right-5 top-5 z-[60] rounded-full border border-line/70 bg-white/88 px-4 py-3 text-xs font-black uppercase tracking-[-0.04em] text-ink shadow-card backdrop-blur-xl transition hover:bg-ink hover:text-paper"
    >
      {content.language.toggle}
    </button>
  );
}
