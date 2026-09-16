import { Heading, Section } from "@/components/Section";
import { flagship, measureFootnote } from "@/content/copy";

export function FlagshipProof() {
  return (
    <Section id="proof">
      <Heading
        eyebrow={flagship.eyebrow}
        sans={flagship.headSans}
        serif={flagship.headSerif}
      />
      <p className="mx-auto mt-7 max-w-[62ch] text-center text-[1.0625rem] leading-[1.75] text-white/80">
        {flagship.body}
      </p>
      <p className="mx-auto mt-4 text-center text-[0.875rem] text-white/52">
        {flagship.meta}
      </p>
      <figure className="hairline mx-auto mt-12 max-w-[920px] overflow-hidden rounded-2xl bg-white/[0.02]">
        <img
          src={flagship.image.src}
          alt={flagship.image.alt}
          width={1600}
          height={900}
          className="w-full"
        />
        <figcaption className="px-6 py-4 text-[0.8125rem] text-white/52">
          {flagship.support}
        </figcaption>
      </figure>
      <article className="hairline mx-auto mt-8 max-w-[920px] rounded-2xl bg-white/[0.015] p-8 sm:p-10">
        <p className="t-label text-white/52">
          {flagship.secondary.label} · {flagship.secondary.period}
        </p>
        <h3 className="t-name mt-4 text-white">{flagship.secondary.head}</h3>
        <p className="mt-4 max-w-[58ch] text-[0.9375rem] leading-[1.8] text-white/70">
          {flagship.secondary.line}
        </p>
        <p className="mt-5 text-[0.8125rem] text-white/52">{flagship.secondary.caveat}</p>
      </article>
      <p className="mx-auto mt-10 max-w-[62ch] text-center text-[0.8125rem] leading-relaxed text-white/45">
        How we measure — {measureFootnote}
      </p>
    </Section>
  );
}
