import { ArrowUpRight, Button, Pill } from "@/components/Button";
import { BOOK_HREF, finalCta } from "@/content/copy";

export function FinalCta() {
  return (
    <section
      id="audit"
      className="relative isolate overflow-hidden border-t border-white/8 px-6 py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.08),rgba(0,0,0,0)_70%)]"
      />
      <div className="relative mx-auto flex max-w-[1240px] flex-col items-center text-center">
        <Pill>{finalCta.eyebrow}</Pill>
        <h2 className="t-row mt-8 max-w-[22ch] text-balance text-white">
          {finalCta.headSans} <em>{finalCta.headSerif}</em>
        </h2>
        <p className="mt-7 max-w-[52ch] text-[1.0625rem] leading-[1.8] text-white/70">
          {finalCta.body}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              window.location.href = BOOK_HREF;
            }}
          >
            {finalCta.ctaPrimary}
            <ArrowUpRight />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => {
              window.location.href = BOOK_HREF;
            }}
          >
            {finalCta.ctaSecondary}
            <ArrowUpRight />
          </Button>
        </div>
        <p className="mt-5 text-[0.8125rem] text-white/52">{finalCta.micro}</p>
        <p className="mt-10 max-w-[46ch] text-[0.875rem] leading-relaxed text-white/45">
          {finalCta.close}
        </p>
      </div>
    </section>
  );
}
