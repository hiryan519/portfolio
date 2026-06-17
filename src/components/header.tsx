"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./language-provider";

export function Header() {
  const { content } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateDarkState = (scrollY: number) => {
      const hero = document.getElementById("top");

      if (!hero) {
        setIsOverDark(scrollY > window.innerHeight * 0.55);
        return;
      }

      const rect = hero.getBoundingClientRect();
      const scrollableDistance = hero.offsetHeight - window.innerHeight;
      const heroProgress = Math.min(
        Math.max(-rect.top / scrollableDistance, 0),
        1,
      );

      setIsOverDark(heroProgress > 0.16 && heroProgress < 0.86);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      updateDarkState(currentScrollY);

      if (Math.abs(delta) < 8) {
        return;
      }

      if (currentScrollY < 60 || delta < 0) {
        setIsCompact(false);
      } else if (delta > 0) {
        setIsCompact(true);
        setIsOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleResize = () => updateDarkState(window.scrollY);

    updateDarkState(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showCompact = isCompact && !isOpen;
  const expandedOnDark = isOverDark && !showCompact;
  const expandedShellClass = expandedOnDark
    ? "max-w-md border-white/18 bg-ink/88 px-2 text-paper md:max-w-lg"
    : "max-w-md border-line/70 bg-white/88 px-2 text-ink md:max-w-lg";
  const homeBadgeClass = expandedOnDark
    ? "bg-paper text-ink"
    : "bg-ink text-paper";
  const navLinkClass = expandedOnDark
    ? "text-paper/70 hover:bg-white/10 hover:text-paper"
    : "text-graphite/70 hover:bg-mist hover:text-ink";
  const resumeClass = expandedOnDark
    ? "bg-paper text-ink hover:bg-paper/86"
    : "bg-ink text-paper hover:bg-graphite";

  return (
    <header className="fixed left-0 right-0 top-5 z-50 px-4">
      <nav
        className={`relative mx-auto flex h-12 items-center overflow-hidden rounded-full border shadow-card backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          showCompact
            ? "max-w-[18rem] border-ink/10 bg-ink px-3 text-paper"
            : expandedShellClass
        }`}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            showCompact
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100 delay-150"
              : "pointer-events-none translate-y-2 scale-95 opacity-0"
          }`}
        >
          <a
            href="#top"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[0.68rem] font-bold tracking-[-0.08em] text-ink"
            aria-label={content.nav.backHome}
          >
            HH
          </a>
          <div className="ml-3 flex items-center gap-2 whitespace-nowrap">
            <span className="text-sm font-medium">{content.nav.available}</span>
            <span className="h-2 w-2 rounded-full bg-violet" />
          </div>
        </div>

        <div
          className={`flex w-full items-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            showCompact
              ? "pointer-events-none -translate-y-2 scale-95 opacity-0"
              : "pointer-events-auto translate-y-0 scale-100 opacity-100 delay-150"
          }`}
        >
          <a
            href="#top"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.68rem] font-bold tracking-[-0.08em] transition-colors ${homeBadgeClass}`}
            aria-label={content.nav.backHome}
          >
            HH
          </a>

          <div className="hidden flex-1 items-center justify-evenly md:flex">
            {content.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-2.5 py-1.5 text-xs font-medium transition ${navLinkClass}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={content.profile.links.resume}
            className={`hidden rounded-full px-3.5 py-1.5 text-xs font-semibold transition md:block ${resumeClass}`}
          >
            {content.nav.resume}
          </a>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-violet text-ink md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-label={content.nav.openMenu}
          >
            <span className="text-lg leading-none">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div
          className={`mx-auto mt-3 max-w-md rounded-[1.5rem] border p-2 shadow-float backdrop-blur-xl md:hidden ${
            isOverDark
              ? "border-white/16 bg-ink/92 text-paper"
              : "border-line bg-white/95 text-ink"
          }`}
        >
          {content.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block rounded-2xl px-4 py-3 text-sm ${
                isOverDark ? "text-paper/76" : "text-graphite/75"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={content.profile.links.resume}
            className="mt-2 block rounded-2xl bg-violet px-4 py-3 text-center text-sm font-semibold text-ink"
            onClick={() => setIsOpen(false)}
          >
            {content.nav.resume}
          </a>
        </div>
      ) : null}
    </header>
  );
}
