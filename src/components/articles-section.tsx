import { articles } from "@/data/profile";
import { SectionKicker } from "./section-kicker";

export function ArticlesSection() {
  return (
    <section id="thinking" className="page-shell py-24">
      <SectionKicker
        label="Design insights & ideas"
        title="Product thinking"
        description="A reserved area for future essays on AI product reviews, methods, and reflections."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {articles.map((article) => (
          <article key={article.title} className="border-t border-line pt-5">
            <p className="mb-3 text-xs text-violet">{article.date}</p>
            <h3 className="tight-title text-2xl font-black uppercase leading-[0.95] text-ink">
              {article.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-graphite/58">
              {article.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
