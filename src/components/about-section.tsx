import { profile, stats } from "@/data/profile";
import { SectionKicker } from "./section-kicker";

export function AboutSection() {
  return (
    <section id="about" className="page-shell py-28">
      <div className="max-w-xl">
        <SectionKicker label="About me" title="About me" />
        <p className="mt-5 text-base leading-8 text-graphite/62">
          {profile.about.join(" ")}
        </p>

        <div className="mt-8 grid grid-cols-3 gap-5">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="tight-title text-5xl font-black text-violet">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-4 text-graphite/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-7 grid gap-2 text-xs text-graphite/60 sm:grid-cols-2">
          <p>Call Today：</p>
          <p>Placeholder / Optional</p>
          <p>Email：</p>
          <a href={profile.links.email} className="hover:text-violet">
            hiryanhang@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
