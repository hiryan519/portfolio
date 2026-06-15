"use client";

import { useState } from "react";
import { faq } from "@/data/profile";
import { SectionKicker } from "./section-kicker";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="page-shell grid gap-8 py-24 md:grid-cols-[0.8fr_1.2fr]">
      <SectionKicker label="Frequently asked questions" title="Frequently asked questions" />
      <div className="divide-y divide-line border-y border-line">
        {faq.map((item, index) => (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="text-sm font-bold text-ink">
                {index + 1}. {item.question}
              </span>
              <span className="text-graphite/60">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index ? (
              <p className="pb-5 text-sm leading-6 text-graphite/58">
                {item.answer}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
