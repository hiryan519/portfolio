"use client";

import { useState } from "react";
import { services } from "@/data/profile";
import { SectionKicker } from "./section-kicker";

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="page-shell py-28">
      <div className="max-w-xl">
        <SectionKicker
          label="What I can do for you"
          title="AI product capabilities"
          description="I break down AI scenarios from a product manager's perspective, connecting capability design, prototype execution, validation, and review in one loop."
        />

        <div className="mt-8 divide-y divide-line border-y border-line">
          {services.map((service, index) => (
            <div key={service.title}>
              <button
                type="button"
                className="flex w-full items-center justify-between py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="tight-title text-xl font-black uppercase text-ink">
                  {index + 1}. {service.title}
                </span>
                <span className="text-lg text-graphite/60">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index ? (
                <div className="grid gap-2 pb-5">
                  {service.items.map((item) => (
                    <p key={item} className="text-sm text-graphite/60">
                      {item}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
