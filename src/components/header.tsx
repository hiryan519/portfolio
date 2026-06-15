"use client";

import { useState } from "react";
import { navigation, profile } from "@/data/profile";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-5 z-50 px-4">
      <nav className="mx-auto flex max-w-md items-center justify-between rounded-full border border-line/70 bg-white/88 px-2 py-2 text-ink shadow-card backdrop-blur-xl md:max-w-lg">
        <a
          href="#top"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[0.68rem] font-bold tracking-[-0.08em] text-paper"
          aria-label="Back to home"
        >
          HH
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-graphite/70 transition hover:bg-mist hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={profile.links.resume}
          className="hidden rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-paper transition hover:bg-graphite md:block"
        >
          Resume
        </a>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-violet text-paper md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-label="Open navigation menu"
        >
          <span className="text-lg">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-md rounded-[1.5rem] border border-line bg-white/95 p-2 text-ink shadow-float backdrop-blur-xl md:hidden">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-sm text-graphite/75"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.links.resume}
            className="mt-2 block rounded-2xl bg-violet px-4 py-3 text-center text-sm font-semibold text-paper"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      ) : null}
    </header>
  );
}
