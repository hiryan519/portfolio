import { profile } from "@/data/profile";
import { WaveBadge } from "./wave-badge";

export function Hero() {
  return (
    <section id="top" className="page-shell flex min-h-[96vh] items-center pt-20">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center">
        <div className="relative grid min-h-[24rem] w-full place-items-center md:min-h-[29rem]">
          <div className="absolute right-[calc(50%+8.9rem)] z-10 w-fit translate-y-2 text-left md:right-[calc(50%+12.2rem)]">
            <p className="mb-1 text-[0.8rem] font-bold uppercase tracking-[-0.04em] text-graphite/72 md:text-[1.65rem]">
              Yichen Huang
            </p>
            <h1 className="tight-title text-[clamp(3.2rem,10vw,8.6rem)] font-black uppercase leading-[0.78] text-ink">
              Product
            </h1>
          </div>

          <h1 className="tight-title absolute left-[calc(50%+8.1rem)] z-10 translate-y-5 text-left text-[clamp(3.2rem,10vw,8.6rem)] font-black uppercase leading-[0.78] text-ink md:left-[calc(50%+11.1rem)]">
            Manager
          </h1>

          <div className="portrait-card framer-shadow absolute z-20 h-[16.5rem] w-[13.2rem] overflow-visible rounded-2xl md:h-[23rem] md:w-[18.4rem]">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="avatar-abstract absolute inset-x-8 bottom-0 h-[80%] rounded-t-[4rem]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-full bg-white/72 px-3 py-2 text-[0.65rem] font-semibold text-ink backdrop-blur">
              AI Workflow / Product Loop
            </div>
            </div>
            <div className="absolute -bottom-6 -left-7 z-30 grid h-16 w-16 place-items-center rounded-full bg-violet text-lg font-bold text-ink shadow-card md:-bottom-8 md:-left-10 md:h-24 md:w-24 md:text-2xl">
              <WaveBadge />
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-md text-sm leading-6 text-graphite/58 md:text-base">
          {profile.intro}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {profile.heroTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-graphite/62"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
