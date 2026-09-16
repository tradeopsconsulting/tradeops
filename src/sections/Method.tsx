import { Heading, Section } from "@/components/Section";
import { method } from "@/content/copy";

export function Method() {
  return (
    <Section id="method">
      <Heading eyebrow={method.eyebrow} sans={method.headSans} serif={method.headSerif} />
      <p className="mx-auto mt-7 max-w-[62ch] text-center text-[0.9375rem] leading-[1.8] text-white/58">
        {method.intro}
      </p>
      <div className="mt-16 grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
        <ol className="overflow-hidden rounded-2xl border border-white/8">
          {method.phases.map((phase) => (
            <li
              key={phase.n}
              className="border-t border-white/8 bg-white/[0.015] px-7 py-8 first:border-t-0 sm:px-9"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
                <p className="t-label text-white">
                  <span className="mr-3 text-white/52 tabular-nums">{phase.n}</span>
                  {phase.name}
                </p>
                <p className="t-label text-[0.75rem] text-white/52">{phase.window}</p>
              </div>
              <p className="mt-4 text-[0.9375rem] leading-[1.8] text-white/62">{phase.body}</p>
            </li>
          ))}
        </ol>
        <div className="hairline rounded-2xl bg-white/[0.02] p-8 sm:p-9">
          <p className="t-label text-[0.75rem] text-white/52">{method.timelineLabel}</p>
          <ol className="mt-7 space-y-5">
            {method.timeline.map((item) => (
              <li key={item.when} className="flex gap-5">
                <span className="t-label w-[4.5rem] shrink-0 text-white/52 tabular-nums">
                  {item.when}
                </span>
                <span className="text-[0.9375rem] leading-snug text-white/80">{item.what}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-[46ch] text-center text-[1.0625rem] leading-relaxed text-white/85">
        {method.outcome}
      </p>
      <p className="mx-auto mt-4 max-w-[46ch] text-center text-[0.875rem] text-white/52">
        {method.caution}
      </p>
    </Section>
  );
}
