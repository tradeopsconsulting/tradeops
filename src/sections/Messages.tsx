import { useState } from "react";
import { Heading, Section } from "@/components/Section";
import { messages } from "@/content/copy";

const PREVIEW = 4;

export function Messages() {
  const [more, setMore] = useState(false);
  const visible = more ? messages.quotes : messages.quotes.slice(0, PREVIEW);

  return (
    <Section id="in-their-words">
      <Heading
        eyebrow={messages.eyebrow}
        sans={messages.headSans}
        serif={messages.headSerif}
      />
      <p className="mx-auto mt-7 max-w-[52ch] text-center text-[0.9375rem] leading-[1.8] text-white/58">
        {messages.sub}
      </p>
      <p className="mx-auto mt-4 max-w-[58ch] text-center text-[0.9375rem] leading-[1.8] text-white/70">
        {messages.body}
      </p>
      <figure className="hairline mx-auto mt-14 max-w-[720px] overflow-hidden rounded-2xl bg-white/[0.02]">
        <img src={messages.highlight.src} alt={messages.highlight.alt} className="w-full" />
        <figcaption className="px-6 py-5 text-[0.9375rem] leading-relaxed text-white/78">
          “{messages.highlight.text}”
        </figcaption>
      </figure>
      <ul className="mt-6 grid gap-5 md:grid-cols-2">
        {visible.map((quote) => (
          <li key={quote.src} className="hairline overflow-hidden rounded-2xl bg-white/[0.015]">
            <img src={quote.src} alt="" className="w-full" />
            <div className="px-5 py-5">
              <p className="text-[0.75rem] text-white/45">{quote.surface}</p>
              <blockquote className="mt-2 text-[0.9375rem] leading-relaxed text-white/80">
                “{quote.text}”
              </blockquote>
            </div>
          </li>
        ))}
      </ul>
      {!more ? (
        <div className="mt-8 text-center">
          <button
            type="button"
            className="liquid-glass glass-solid rounded-full px-6 py-2.5 text-[0.8125rem] text-white"
            onClick={() => setMore(true)}
          >
            Show more
          </button>
        </div>
      ) : null}
    </Section>
  );
}
