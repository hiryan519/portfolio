"use client";

import { useState } from "react";
import { useLanguage } from "./language-provider";

export function FaqSection() {
  const { content } = useLanguage();
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="page-shell grid gap-12 py-28 md:grid-cols-[0.82fr_1.18fr] md:items-start">
      <div className="md:sticky md:top-28">
        <h2 className="tight-title text-[clamp(2.55rem,4.25vw,4.35rem)] font-black uppercase leading-[0.96] text-ink">
          {content.faqIntro.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-7 max-w-md text-lg leading-8 text-graphite/68">
          {content.faqIntro.description}
        </p>
      </div>

      <div className="divide-y divide-line border-y border-line">
        {content.faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className={`-mx-5 rounded-[1.25rem] px-5 transition-colors duration-300 ${
                isOpen ? "bg-graphite/[0.09]" : "bg-transparent"
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                className="group flex w-full items-start justify-between gap-6 py-8 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span
                  className={`tight-title text-[clamp(1.25rem,1.8vw,2.05rem)] font-black uppercase leading-[1.05] transition-colors duration-300 [letter-spacing:normal] [word-spacing:0.16em] ${
                    isOpen ? "text-violet" : "text-ink group-hover:text-ink/72"
                  }`}
                >
                  {index + 1}. {item.question}
                </span>
                <span
                  className={`mt-1 text-3xl leading-none transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-violet" : "text-ink"
                  }`}
                >
                  ^
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-3xl pb-8 text-lg leading-8 text-graphite/72">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
