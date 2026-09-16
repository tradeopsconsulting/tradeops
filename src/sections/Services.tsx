import { Heading, Section } from "@/components/Section";
import { services } from "@/content/copy";

export function Services() {
  return (
    <Section id="services">
      <Heading
        eyebrow={services.eyebrow}
        sans={services.headSans}
        serif={services.headSerif}
      />
      <p className="mx-auto mt-7 max-w-[58ch] text-center text-[1.0625rem] leading-[1.75] text-white/80">
        {services.intro}
      </p>
      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {services.cards.map((card) => (
          <article
            key={card.n}
            className="hairline flex flex-col rounded-2xl bg-white/[0.015] p-8 sm:p-9"
          >
            <p className="t-label text-white/52">
              <span className="mr-3 tabular-nums">{card.n}</span>
              {card.name}
            </p>
            <h3 className="t-card mt-6 text-white">{card.head}</h3>
            <p className="mt-4 text-[0.9375rem] leading-[1.8] text-white/62">{card.outcome}</p>
            <ul className="mt-8 space-y-3 text-[0.875rem] leading-relaxed text-white/70">
              {card.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-[54ch] text-center text-[0.875rem] leading-relaxed text-white/52">
        {services.note}
      </p>
    </Section>
  );
}
