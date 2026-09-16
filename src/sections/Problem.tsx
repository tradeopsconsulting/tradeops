import { Heading, Section } from "@/components/Section";
import { problem } from "@/content/copy";

export function Problem() {
  return (
    <Section id="problem">
      <Heading
        eyebrow={problem.eyebrow}
        sans={problem.headSans}
        serif={problem.headSerif}
      />
      <p className="mx-auto mt-8 max-w-[62ch] text-center text-[1.0625rem] leading-[1.8] text-white/80">
        {problem.body}
      </p>
      <div className="hairline mx-auto mt-12 max-w-[62ch] rounded-2xl bg-white/[0.015] p-8 sm:p-9">
        <p className="t-label text-white/58">{problem.costLabel}</p>
        <p className="mt-4 text-[1.0625rem] leading-[1.75] text-white/85">{problem.cost}</p>
      </div>
      <p className="mx-auto mt-10 max-w-[52ch] text-center text-[0.9375rem] text-white/52">
        {problem.bridge}
      </p>
    </Section>
  );
}
