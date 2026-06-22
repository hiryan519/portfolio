"use client";

import { useEffect, useRef, useState } from "react";
import { SectionKicker } from "./section-kicker";
import { useLanguage } from "./language-provider";
import type { Project } from "@/data/i18n";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.03c.98 0 1.97.13 2.89.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function ProjectStackCard({
  project,
}: {
  project: Project;
}) {
  const isDenseCase = project.caseStudy.some((item) => item.body.length > 220);
  const isExtraDenseCase = project.caseStudy.some((item) => item.body.length > 300);

  return (
    <article className="overflow-hidden rounded-[1.65rem] bg-paper text-ink">
      <div
        className="project-visual relative grid h-[24rem] place-items-center overflow-hidden rounded-[1.25rem] md:h-[31rem]"
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-lg px-8 text-center text-white">
          <p className="mx-auto mb-4 w-fit rounded-full bg-violet px-3 py-1 text-[0.7rem] font-bold text-ink">
            {project.category}
          </p>
          <h3 className="tight-title text-5xl font-black uppercase leading-[0.86] md:text-7xl">
            {project.name}
          </h3>
          <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-6 text-white/82">
            {project.description}
          </p>
        </div>
      </div>

      <div className="grid gap-4 px-1 py-4 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <p className="text-sm font-semibold text-violet">{project.status}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-line px-3 py-1 text-sm text-graphite/64"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-violet px-5 py-2.5 text-sm font-semibold text-ink hover:bg-ink hover:text-paper"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>

      <div
        id={`${project.id}-case`}
        className={`rounded-[1.25rem] border border-line bg-white ${
          isExtraDenseCase ? "p-3.5" : isDenseCase ? "p-4" : "p-5"
        }`}
      >
        <div
          className={`grid md:grid-cols-3 ${
            isExtraDenseCase ? "gap-x-4 gap-y-2.5" : isDenseCase ? "gap-x-5 gap-y-3" : "gap-4"
          }`}
        >
          {project.caseStudy.slice(0, 6).map((item) => (
            <div key={item.title}>
              <h4
                className={
                  isExtraDenseCase
                    ? "text-[0.86rem] font-bold text-ink"
                    : isDenseCase
                    ? "text-[0.95rem] font-bold text-ink"
                    : "text-base font-bold text-ink"
                }
              >
                {item.title}
              </h4>
              <p
                className={
                  isExtraDenseCase
                    ? "mt-1 text-[0.75rem] leading-[1.35] text-graphite/62"
                    : isDenseCase
                    ? "mt-1.5 text-[0.82rem] leading-[1.45] text-graphite/62"
                    : "mt-2 text-sm leading-6 text-graphite/62"
                }
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function StaticProjects() {
  const { content } = useLanguage();

  return (
    <section id="projects" className="page-shell py-28">
      <SectionKicker
        label={content.projectsIntro.eyebrow}
        title={content.projectsIntro.title}
        description={content.projectsIntro.description}
      />
      <div className="grid gap-12">
        {content.projects.map((project) => (
          <ProjectStackCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const { content } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () =>
      setPrefersReducedMotion(mediaQuery.matches);

    updateReducedMotion();
    mediaQuery.addEventListener("change", updateReducedMotion);

    return () => {
      mediaQuery.removeEventListener("change", updateReducedMotion);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let frameId = 0;

    const updateProgress = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance =
        sectionRef.current.offsetHeight - window.innerHeight;
      setProgress(clamp(-rect.top / scrollableDistance));
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
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <StaticProjects />;
  }

  const headingExit = clamp((progress - 0.06) / 0.18);
  const firstEnter = clamp((progress - 0.06) / 0.24);
  const secondRise = clamp((progress - 0.48) / 0.24);
  const secondCover = clamp((progress - 0.68) / 0.28);

  const headingY = -340 * headingExit;
  const headingOpacity = 1 - headingExit;

  const firstY = 340 * (1 - firstEnter) - secondRise * 92 - secondCover * 185;
  const firstScale = 0.96 - secondRise * 0.05 - secondCover * 0.17;
  const firstOpacity = 1 - secondCover * 0.4;

  const isSecondProjectDense = content.projects[1].caseStudy.some(
    (item) => item.body.length > 220,
  );
  const secondDenseLift = isSecondProjectDense ? 150 : 0;
  const secondY = 760 - secondRise * 530 - secondCover * (230 + secondDenseLift);
  const secondScale = 0.98 + secondCover * 0.03;
  const secondOpacity = clamp((progress - 0.42) / 0.08);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative -mt-20 h-[470vh] bg-paper text-ink"
    >
      <div className="sticky top-0 min-h-screen overflow-hidden">
        <div className="relative min-h-screen pt-16">
          <div className="page-shell">
            <div
              className="max-w-5xl will-change-transform"
              style={{
                opacity: headingOpacity,
                transform: `translate3d(0, ${headingY}px, 0)`,
              }}
            >
              <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[-0.04em] text-graphite/60">
                {content.projectsIntro.eyebrow}
              </p>
              <h2 className="tight-title text-[clamp(4rem,7vw,7rem)] font-black uppercase leading-[0.9] text-ink">
                {content.projectsIntro.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-graphite/60">
                {content.projectsIntro.description}
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 w-[min(calc(100vw-2rem),1080px)] -translate-x-1/2 -translate-y-1/2">
            <div
              className="absolute inset-x-0 top-1/2 will-change-transform"
              style={{
                opacity: firstOpacity,
                transform: `translate3d(0, calc(-50% + ${firstY}px), 0) scale(${firstScale})`,
                transformOrigin: "center center",
                zIndex: 10,
              }}
            >
              <ProjectStackCard project={content.projects[0]} />
            </div>

            <div
              className="absolute inset-x-0 top-1/2 will-change-transform"
              style={{
                opacity: secondOpacity,
                transform: `translate3d(0, calc(-50% + ${secondY}px), 0) scale(${secondScale})`,
                transformOrigin: "center center",
                zIndex: 20,
              }}
            >
              <ProjectStackCard project={content.projects[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
