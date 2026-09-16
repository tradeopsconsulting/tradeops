import { Heading, Section } from "@/components/Section";
import { guarantee } from "@/content/copy";

export function Guarantee() {
  return (
    <Section id="guarantee">
      <Heading
        eyebrow={guarantee.eyebrow}
        sans={guarantee.headSans}
        serif={guarantee.headSerif}
      />
      <p className="mx-auto mt-7 max-w-[52ch] text-center text-[1.0625rem] leading-[1.7] text-white/85">
        {guarantee.definition}
      </p>
      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/8 sm:grid-cols-5">
        {guarantee.beats.map((beat) => (
          <li key={beat.n} className="bg-white/[0.02] px-5 py-7">
            <p className="t-label text-white/52">{beat.n}</p>
            <p className="t-label mt-4 text-white">{beat.label}</p>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-white/62">{beat.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/8 lg:grid-cols-3">
        {guarantee.points.map((point) => (
          <article key={point.label} className="bg-white/[0.015] px-7 py-8 sm:px-9">
            <h3 className="t-label text-white">{point.label}</h3>
            <p className="mt-4 text-[0.9375rem] leading-[1.8] text-white/62">{point.body}</p>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-[54ch] text-center text-[0.8125rem] leading-relaxed text-white/45">
        {guarantee.note}
      </p>
    </Section>
  );
}
