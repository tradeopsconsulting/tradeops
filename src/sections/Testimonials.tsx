import { useState } from "react";
import { PlayIcon } from "@/components/Button";
import { Heading, Section } from "@/components/Section";
import { testimonials } from "@/content/copy";

export function Testimonials() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <Section id="testimonials">
      <Heading
        eyebrow={testimonials.eyebrow}
        sans={testimonials.headSans}
        serif={testimonials.headSerif}
      />
      <p className="mx-auto mt-7 max-w-[52ch] text-center text-[0.9375rem] leading-[1.8] text-white/58">
        {testimonials.sub}
      </p>
      <ul className="mt-14 grid gap-5 sm:grid-cols-2">
        {testimonials.items.map((item) => {
          const active = playing === item.src;
          return (
            <li key={item.src} className="hairline overflow-hidden rounded-2xl bg-white/[0.015]">
              <div className="relative aspect-[4/5] bg-black sm:aspect-video">
                {active ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={item.src}
                    poster={item.poster}
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <button
                    type="button"
                    className="group absolute inset-0"
                    onClick={() => setPlaying(item.src)}
                    aria-label={`Play testimonial from ${item.name}`}
                  >
                    <img
                      src={item.poster}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover brightness-[0.82] transition-[filter] duration-300 group-hover:brightness-100"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="liquid-glass glass-solid absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105">
                      <PlayIcon />
                    </span>
                  </button>
                )}
              </div>
              <div className="px-5 py-5">
                <p className="t-label text-white">
                  {item.name}
                  <span aria-hidden className="px-1.5 text-white/22">
                    ·
                  </span>
                  <span className="font-normal text-white/52">
                    {item.role}, {item.org}
                  </span>
                </p>
                <blockquote className="mt-3 text-[0.9375rem] leading-relaxed text-white/78">
                  “{item.quote}”
                </blockquote>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
