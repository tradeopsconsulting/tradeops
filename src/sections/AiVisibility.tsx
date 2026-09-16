import { useState } from "react";
import { Heading, Section } from "@/components/Section";
import { ai } from "@/content/copy";

export function AiVisibility() {
  const [open, setOpen] = useState(false);

  return (
    <Section id="proof-ai">
      <Heading eyebrow={ai.eyebrow} sans={ai.headSans} serif={ai.headSerif} />
      <p className="mx-auto mt-7 max-w-[62ch] text-center text-[1.0625rem] leading-[1.75] text-white/80">
        {ai.soWhat}
      </p>
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {ai.proofs.map((proof) => (
          <article key={proof.client} className="hairline rounded-2xl bg-white/[0.015] p-8">
            <p className="t-label text-white">{proof.client}</p>
            <p className="mt-3 text-[0.875rem] text-white/52">
              Asked {proof.month}: “{proof.query}”
            </p>
            <dl className="mt-6 space-y-3">
              {proof.rows.map((row) => (
                <div key={row.engine} className="flex items-baseline justify-between gap-4">
                  <dt className="text-[0.9375rem] text-white/70">{row.engine}</dt>
                  <dd className="text-right text-[0.9375rem] text-white">{row.place}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {ai.frames.map((frame) => (
          <figure key={frame.src} className="hairline overflow-hidden rounded-2xl bg-white/[0.02]">
            <div className="relative overflow-hidden bg-black">
              <img
                src={frame.src}
                alt={frame.alt}
                className="w-full"
                style={
                  frame.crop < 1
                    ? {
                        objectFit: "cover",
                        objectPosition: `50% ${frame.cropStart * 100}%`,
                        height: "220px",
                      }
                    : undefined
                }
              />
            </div>
            <figcaption className="flex flex-wrap items-baseline justify-between gap-x-3 px-4 py-4">
              <span className="t-label text-white/85">{frame.engine}</span>
              <span className="text-[0.8125rem] text-white/52">{frame.place}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-[62ch] text-center">
        <button
          type="button"
          className="text-[0.8125rem] text-white/62 underline-offset-4 hover:text-white hover:underline"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Hide how these were checked" : "How these were checked"}
        </button>
        {open ? (
          <p className="mt-4 text-[0.875rem] leading-relaxed text-white/52">{ai.how}</p>
        ) : null}
      </div>
    </Section>
  );
}
