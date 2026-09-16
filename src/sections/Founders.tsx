import { ArrowUpRight, Button } from "@/components/Button";
import { Heading, Section } from "@/components/Section";
import { BOOK_HREF, BOOK_LABEL, founders } from "@/content/copy";

export function Founders() {
  return (
    <Section id="founders">
      <Heading
        eyebrow={founders.eyebrow}
        sans={founders.headSans}
        serif={founders.headSerif}
      />
      <dl className="mx-auto mt-12 grid max-w-[800px] gap-px overflow-hidden rounded-2xl border border-white/8 sm:grid-cols-3">
        {founders.stats.map((stat) => (
          <div key={stat.label} className="bg-white/[0.02] px-6 py-8 text-center">
            <dt className="t-spine text-white">{stat.figure}</dt>
            <dd className="mt-3 text-[0.8125rem] leading-snug text-white/52">{stat.label}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {founders.people.map((person) => (
          <article key={person.id} id={person.id} className="hairline overflow-hidden rounded-2xl">
            <img
              src={person.evidence.src}
              alt={person.evidence.alt}
              className={
                person.id === "yash"
                  ? "aspect-[4/5] w-full object-cover object-top"
                  : "aspect-[16/10] w-full object-cover"
              }
            />
            <div className="bg-white/[0.015] p-8 sm:p-9">
              <p className="t-label text-white/52">{person.role}</p>
              <h3 className="t-name mt-2 text-white">{person.name}</h3>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-white/85">{person.lead}</p>
              <p className="mt-4 text-[0.9375rem] leading-[1.8] text-white/62">{person.body}</p>
              <p className="mt-5 text-[0.8125rem] text-white/45">{person.evidence.caption}</p>
              {"links" in person && person.links ? (
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {person.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[0.8125rem] text-white/70 underline-offset-4 hover:text-white hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-14 flex flex-col items-center gap-4 text-center">
        <p className="max-w-[40ch] text-[0.9375rem] text-white/70">{founders.cta}</p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            window.location.href = BOOK_HREF;
          }}
        >
          {BOOK_LABEL}
          <ArrowUpRight />
        </Button>
      </div>
    </Section>
  );
}
