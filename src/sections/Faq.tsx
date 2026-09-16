import { Heading, Section } from "@/components/Section";
import { faq } from "@/content/copy";
import { cn } from "@/lib/cn";

export function Faq() {
  return (
    <Section id="faq">
      <Heading eyebrow={faq.eyebrow} sans={faq.headSans} serif={faq.headSerif} />
      <dl className="mx-auto mt-14 max-w-[74ch]">
        {faq.items.map((item, i) => (
          <div
            key={item.q}
            className={cn(
              "grid gap-x-10 gap-y-3 py-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]",
              i > 0 && "border-t border-white/8",
            )}
          >
            <dt className="t-card text-white">{item.q}</dt>
            <dd className="text-[0.9375rem] leading-[1.8] text-white/62">{item.a}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
