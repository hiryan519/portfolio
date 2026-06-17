import { articles } from "@/data/profile";

export function ArticlesSection() {
  return (
    <section id="thinking" className="page-shell py-24">
      <div>
        <h2 className="tight-title text-[clamp(2.55rem,4.25vw,4.35rem)] font-black uppercase leading-[0.96] text-ink">
          Product thinking
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite/68">
          A reserved area for future essays on AI product reviews, methods, and
          reflections.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {articles.map((article) => (
          <article key={article.title} className="border-t border-line pt-8">
            <p className="mb-5 text-sm font-semibold text-violet">
              {article.date}
            </p>
            <h3 className="tight-title text-[clamp(1.25rem,1.8vw,2.05rem)] font-black uppercase leading-[1.05] text-ink [letter-spacing:normal] [word-spacing:0.16em]">
              {article.title}
            </h3>
            <p className="mt-5 text-lg leading-8 text-graphite/72">
              {article.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
