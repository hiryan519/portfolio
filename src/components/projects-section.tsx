import { projects } from "@/data/profile";
import { SectionKicker } from "./section-kicker";

export function ProjectsSection() {
  return (
    <section id="projects" className="page-shell py-28">
      <SectionKicker
        label="Featured projects"
        title="AI product projects"
        description="These projects show how I understand RAG, Agents, Prompt design, AI product evaluation, and product loops through real practice."
      />

      <div className="mt-8 grid gap-12">
        {projects.map((project) => (
          <article key={project.id} className="group">
            <div className="project-visual relative grid h-[22rem] place-items-center overflow-hidden rounded-xl md:h-[29rem]">
              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
              <div className="relative max-w-lg px-8 text-center text-white">
                <p className="mx-auto mb-4 w-fit rounded-full bg-violet px-3 py-1 text-[0.65rem] font-bold">
                  {project.category}
                </p>
                <h3 className="tight-title text-4xl font-black uppercase leading-[0.9] md:text-6xl">
                  {project.name}
                </h3>
                <p className="mx-auto mt-4 max-w-sm text-xs leading-5 text-white/78">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <p className="text-xs font-semibold text-violet">
                  {project.status}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-line px-3 py-1 text-xs text-graphite/58"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={project.demoUrl}
                  className="rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink hover:bg-white"
                >
                  View Demo
                </a>
                <a
                  href={`#${project.id}-case`}
                  className="rounded-full bg-violet px-4 py-2 text-xs font-semibold text-paper hover:bg-ink"
                >
                  View Case
                </a>
              </div>
            </div>

            <div
              id={`${project.id}-case`}
              className="mt-4 rounded-xl border border-line bg-white p-5"
            >
              <div className="grid gap-4 md:grid-cols-3">
                {project.caseStudy.slice(0, 6).map((item) => (
                  <div key={item.title}>
                    <h4 className="text-sm font-bold text-ink">{item.title}</h4>
                    <p className="mt-2 text-xs leading-5 text-graphite/58">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
