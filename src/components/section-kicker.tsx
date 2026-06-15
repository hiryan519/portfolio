type SectionKickerProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionKicker({
  label,
  title,
  description,
  align = "left",
}: SectionKickerProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-xl text-center" : "max-w-xl"}>
      <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[-0.04em] text-graphite/60">
        {label}
      </p>
      <h2 className="tight-title text-4xl font-black uppercase leading-[0.9] text-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-6 text-graphite/60">{description}</p>
      ) : null}
    </div>
  );
}
