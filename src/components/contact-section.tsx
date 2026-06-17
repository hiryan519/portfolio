import { contactLinks, profile } from "@/data/profile";
import { WaveBadge } from "./wave-badge";

export function ContactSection() {
  return (
    <section id="contact" className="page-shell py-24">
      <div className="grid items-start gap-8 md:grid-cols-[0.55fr_1fr]">
        <div className="relative mx-auto h-80 w-64 overflow-visible rounded-2xl md:mx-0 md:mt-8 md:h-[30rem] md:w-[23rem]">
          <div className="portrait-card framer-shadow absolute inset-0 overflow-hidden rounded-2xl">
            <div className="avatar-abstract absolute inset-x-8 bottom-0 h-[82%] rounded-t-[4rem]" />
          </div>
          <div className="absolute -bottom-6 -left-7 grid h-16 w-16 place-items-center rounded-full bg-violet text-lg font-bold text-ink md:-bottom-8 md:-left-10 md:h-24 md:w-24 md:text-2xl">
            <WaveBadge />
          </div>
        </div>

        <div>
          <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[-0.04em] text-graphite/60">
            Let&apos;s work together
          </p>
          <h2 className="tight-title text-5xl font-black uppercase leading-[0.85] text-ink">
            Contact
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-graphite/58">
            If you want to learn more about my AI product projects, prototype thinking, or case reviews, feel free to reach out.
          </p>

          <div className="mt-6 grid gap-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between rounded-full border border-line bg-white px-4 py-3 text-sm text-graphite/64 hover:border-violet hover:text-violet"
              >
                <span>{link.label}</span>
                <span>{link.value}</span>
              </a>
            ))}
          </div>

          <a
            href={profile.links.email}
            className="mt-4 block rounded-full bg-violet px-5 py-3 text-center text-sm font-bold text-ink hover:bg-ink hover:text-paper"
          >
            Send email
          </a>
        </div>
      </div>
    </section>
  );
}
