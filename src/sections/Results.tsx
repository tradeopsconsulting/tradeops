import { Heading, Section } from "@/components/Section";
import { results } from "@/content/copy";

export function Results() {
  return (
    <Section id="results">
      <Heading
        eyebrow={results.eyebrow}
        sans={results.headSans}
        serif={results.headSerif}
      />
      <div className="mt-16 grid gap-5">
        <article className="hairline rounded-2xl bg-white/[0.015] p-8 sm:p-10">
          <p className="t-label text-white/52">{results.green.name}</p>
          <h3 className="t-card mt-4 max-w-[30ch] text-white">{results.green.headline}</h3>
          <p className="mt-4 max-w-[52ch] text-[0.9375rem] leading-[1.8] text-white/62">
            {results.green.detail}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {results.green.panels.map((panel) => (
              <figure key={panel.place} className="overflow-hidden rounded-xl bg-black">
                <img src={panel.src} alt={panel.alt} className="w-full" />
                <figcaption className="px-3 py-3 text-[0.75rem] text-white/52">
                  {panel.place}
                </figcaption>
              </figure>
            ))}
          </div>
        </article>

        <article className="hairline grid gap-8 rounded-2xl bg-white/[0.015] p-8 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:p-10">
          <div>
            <p className="t-label text-white/52">{results.jurnee.name}</p>
            <h3 className="t-card mt-4 text-white">{results.jurnee.headline}</h3>
            <p className="mt-4 text-[0.9375rem] leading-[1.8] text-white/62">
              {results.jurnee.detail}
            </p>
          </div>
          <figure className="overflow-hidden rounded-xl">
            <img
              src={results.jurnee.image.src}
              alt={results.jurnee.image.alt}
              className="w-full"
            />
          </figure>
        </article>

        <article className="hairline rounded-2xl bg-white/[0.015] p-8 sm:p-10">
          <p className="t-label text-white/52">{results.bw.name} · honesty callout, not the lead</p>
          <h3 className="t-card mt-4 max-w-[36ch] text-white">{results.bw.headline}</h3>
          <p className="mt-4 text-[0.9375rem] leading-[1.8] text-white/62">{results.bw.detail}</p>
          <p className="mt-5 max-w-[62ch] text-[0.9375rem] leading-[1.8] text-white/58">
            {results.bw.frame}
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[0.8125rem] text-white/70">
            {results.bw.keywords.map((kw) => (
              <li key={kw} className="rounded-full border border-white/10 px-3 py-1">
                {kw}
              </li>
            ))}
          </ul>
          <figure className="mt-8 overflow-hidden rounded-xl">
            <img src={results.bw.image.src} alt={results.bw.image.alt} className="w-full" />
          </figure>
        </article>
      </div>
    </Section>
  );
}
