"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./language-provider";
import { WaveBadge } from "./wave-badge";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function Hero() {
  const { content } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance =
        sectionRef.current.offsetHeight - window.innerHeight;
      const nextProgress = clamp(-rect.top / scrollableDistance, 0, 1);
      setProgress(nextProgress);
    };

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const introProgress = clamp(progress / 0.62, 0, 1);
  const aboutProgress = clamp((progress - 0.62) / 0.38, 0, 1);
  const aboutEntryProgress = clamp((aboutProgress - 0.28) / 0.72, 0, 1);
  const aboutLightProgress = aboutEntryProgress;
  const serviceExitProgress = clamp((aboutProgress - 0.02) / 0.58, 0, 1);
  const landingProgress = clamp((introProgress - 0.24) / 0.48, 0, 1);
  const serviceRiseProgress = clamp((introProgress - 0.28) / 0.72, 0, 1);
  const serviceTextRiseProgress = clamp((introProgress - 0.38) / 0.62, 0, 1);
  const titleLift = introProgress * -280;
  const cardX = introProgress * 430 - aboutProgress * 20;
  const cardY = introProgress * 80 - serviceRiseProgress * 80 + aboutProgress * 40;
  const cardRotateY = introProgress * 180 + aboutProgress * 180;
  const cardRotateZ = introProgress * 8 - aboutProgress * 14;
  const cardScale = 1 + landingProgress * 0.08;
  const lowerTextOpacity = clamp(1 - introProgress * 1.65, 0, 1);
  const lowerTextY = introProgress * -42;
  const introOpacity = clamp(1 - landingProgress * 2, 0, 1);
  const badgeOpacity = clamp(1 - landingProgress * 2.4, 0, 1);
  const serviceOpacity = landingProgress * clamp(1 - serviceExitProgress * 1.25, 0, 1);
  const aboutOpacity = aboutEntryProgress;
  const aboutY = 120 - aboutEntryProgress * 160;

  return (
    <section ref={sectionRef} id="top" className="relative h-[340vh]">
      <div className="sticky top-0 min-h-screen overflow-hidden bg-paper">
        <div
          className="absolute inset-0 bg-ink transition-opacity"
          style={{ opacity: landingProgress * (1 - aboutLightProgress) }}
        />
        <div
          className="absolute inset-0 opacity-0 transition-opacity"
          style={{
            opacity: landingProgress * (1 - aboutLightProgress) * 0.9,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.20) 1px, transparent 0)",
            backgroundSize: "10px 10px",
          }}
        />
        <div className="page-shell relative flex min-h-screen items-center pt-20">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center">
        <div className="relative grid min-h-[24rem] w-full place-items-center [perspective:1600px] md:min-h-[29rem]">
          <div
            className="absolute left-0 top-1/2 z-30 w-[min(58vw,44rem)] text-left text-paper"
            style={{
              opacity: serviceOpacity,
              transform: `translate3d(0, calc(-50% + ${
                220 - serviceTextRiseProgress * 220 - serviceExitProgress * 520
              }px), 0)`,
              pointerEvents:
                landingProgress > 0.85 && serviceOpacity > 0.2
                  ? "auto"
                  : "none",
            }}
          >
            <p className="mb-4 text-sm font-medium text-paper/72">
              {content.servicesIntro.eyebrow}
            </p>
            <h2 className="tight-title text-[clamp(3rem,6.2vw,6.2rem)] font-black uppercase leading-[0.92]">
              {content.servicesIntro.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-paper/78">
              {content.servicesIntro.description}
            </p>
            <div className="mt-12 divide-y divide-white/18 border-y border-white/18">
              {content.services.map((service, index) => (
                <div
                  key={service.title}
                  className="grid grid-cols-[1fr_auto] items-center gap-8 py-5"
                >
                  <h3 className="tight-title text-3xl font-black uppercase leading-none text-paper md:text-4xl">
                    {index + 1}. {service.title}
                  </h3>
                  <span className="text-3xl text-paper">⌃</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute right-[calc(50%+8.9rem)] z-10 w-fit text-left md:right-[calc(50%+12.2rem)]"
            style={{
              transform: `translate3d(0, ${titleLift + 8}px, 0)`,
              opacity: introOpacity,
            }}
          >
            <p className="mb-1 text-[0.8rem] font-bold uppercase tracking-[-0.04em] text-graphite/72 md:text-[1.65rem]">
              {content.profile.displayName}
            </p>
            <h1 className="tight-title text-[clamp(3.2rem,10vw,8.6rem)] font-black uppercase leading-[0.78] text-ink">
              {content.profile.headlineLeft}
            </h1>
          </div>

          <h1
            className="tight-title absolute left-[calc(50%+8.1rem)] z-10 text-left text-[clamp(3.2rem,10vw,8.6rem)] font-black uppercase leading-[0.78] text-ink md:left-[calc(50%+11.1rem)]"
            style={{
              transform: `translate3d(0, ${titleLift + 20}px, 0)`,
              opacity: introOpacity,
            }}
          >
            {content.profile.headlineRight}
          </h1>

          <div
            className="portrait-card framer-shadow absolute z-20 h-[16.5rem] w-[13.2rem] overflow-visible rounded-2xl will-change-transform md:h-[23rem] md:w-[18.4rem]"
            style={{
              transform: `translate3d(${cardX}px, ${cardY}px, 0) rotateY(${cardRotateY}deg) rotateZ(${cardRotateZ}deg) scale(${cardScale})`,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute inset-0 overflow-hidden rounded-2xl"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <div className="avatar-abstract absolute inset-x-8 bottom-0 h-[80%] rounded-t-[4rem]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-full bg-white/72 px-3 py-2 text-[0.65rem] font-semibold text-ink backdrop-blur">
                {content.hero.cardCaption}
              </div>
            </div>
            <div
              className="project-visual absolute inset-0 overflow-hidden rounded-2xl"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="absolute inset-6 rounded-xl border border-white/20 bg-white/20 backdrop-blur" />
              <div className="absolute left-8 right-8 top-12 h-24 rounded-xl bg-white/70" />
              <div className="absolute bottom-10 left-8 right-8 grid grid-cols-3 gap-3">
                <span className="h-20 rounded-xl bg-white/50" />
                <span className="h-20 rounded-xl bg-white/30" />
                <span className="h-20 rounded-xl bg-white/60" />
              </div>
            </div>
            <div
              className="absolute -bottom-6 -left-7 z-30 grid h-16 w-16 place-items-center rounded-full bg-violet text-lg font-bold text-ink shadow-card md:-bottom-8 md:-left-10 md:h-24 md:w-24 md:text-2xl"
              style={{
                opacity: badgeOpacity,
                pointerEvents: badgeOpacity < 0.1 ? "none" : "auto",
              }}
            >
              <WaveBadge />
            </div>
          </div>
        </div>

        <div
          id="about"
          className="pointer-events-none absolute left-0 top-1/2 z-10 w-[min(56vw,42rem)] text-left text-ink"
          style={{
            opacity: aboutOpacity,
            transform: `translate3d(0, calc(-50% + ${aboutY}px), 0)`,
          }}
        >
          <h2 className="tight-title text-[clamp(4rem,7vw,7rem)] font-black uppercase leading-[0.9]">
            {content.about.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite/68">
            {content.profile.about.join(" ")}
          </p>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-6">
            {content.stats.map((stat) => (
              <div key={stat.label}>
                <p className="tight-title text-5xl font-black text-violet md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-semibold leading-4 text-graphite/58">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="will-change-transform"
          style={{
            opacity: lowerTextOpacity,
            transform: `translate3d(0, ${lowerTextY}px, 0)`,
            pointerEvents: lowerTextOpacity < 0.15 ? "none" : "auto",
          }}
        >
          <p className="mt-8 max-w-md text-sm leading-6 text-graphite/58 md:text-base">
            {content.profile.intro}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {content.profile.heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-graphite/62"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}
