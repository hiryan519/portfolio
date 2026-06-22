"use client";

import Image from "next/image";
import { WaveBadge } from "./wave-badge";
import { useLanguage } from "./language-provider";

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14" />
    </svg>
  );
}

export function ContactSection() {
  const { content } = useLanguage();

  return (
    <section id="contact" className="page-shell py-24">
      <div className="grid items-start gap-8 md:grid-cols-[0.55fr_1fr]">
        <div className="relative mx-auto h-80 w-64 overflow-visible rounded-2xl md:mx-0 md:mt-8 md:h-[25rem] md:w-[19.2rem]">
          <div className="portrait-card framer-shadow absolute inset-0 overflow-hidden rounded-2xl">
            <Image
              src="/assets/profile-photo.jpg"
              alt={content.profile.name}
              className="object-cover object-top"
              fill
              sizes="(min-width: 768px) 19.2rem, 16rem"
              unoptimized
            />
          </div>
          <div className="absolute -bottom-6 -left-7 grid h-16 w-16 place-items-center rounded-full bg-violet text-lg font-bold text-ink md:-bottom-8 md:-left-10 md:h-24 md:w-24 md:text-2xl">
            <WaveBadge />
          </div>
        </div>

        <div>
          <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[-0.04em] text-graphite/60">
            {content.contact.eyebrow}
          </p>
          <h2 className="tight-title text-5xl font-black uppercase leading-[0.85] text-ink">
            {content.contact.title}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-graphite/58">
            {content.contact.description}
          </p>

          <div className="mt-6 grid gap-2">
            {content.contact.links.map((link) => {
              const className =
                "flex items-center justify-between rounded-full border border-line bg-white px-4 py-3 text-sm text-graphite/64";

              if ("isDownload" in link && link.isDownload) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    download
                    className={`${className} hover:border-violet hover:text-violet`}
                  >
                    <span>{link.label}</span>
                    <span className="flex items-center gap-1.5">
                      <DownloadIcon />
                      {link.value}
                    </span>
                  </a>
                );
              }

              return (
                <div key={link.label} className={className}>
                  <span>{link.label}</span>
                  <span>{link.value}</span>
                </div>
              );
            })}
          </div>

          <a
            href={content.profile.links.email}
            className="mt-4 block rounded-full bg-violet px-5 py-3 text-center text-sm font-bold text-ink hover:bg-ink hover:text-paper"
          >
            {content.contact.action}
          </a>
        </div>
      </div>
    </section>
  );
}
