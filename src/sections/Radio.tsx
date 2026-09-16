import { useState } from "react";
import { PlayIcon } from "@/components/Button";
import { Heading, Section } from "@/components/Section";
import { radio } from "@/content/copy";

export function Radio() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Section id="radio">
      <Heading eyebrow={radio.eyebrow} sans={radio.headSans} serif={radio.headSerif} />
      <p className="mx-auto mt-7 max-w-[58ch] text-center text-[0.9375rem] leading-[1.8] text-white/58">
        {radio.body}
      </p>
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {radio.episodes.map((episode) => {
          const playing = active === episode.id;
          return (
            <li key={episode.id}>
              {playing ? (
                <div className="aspect-video overflow-hidden rounded-2xl">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${episode.id}?autoplay=1&rel=0&modestbranding=1`}
                    title={episode.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setActive(episode.id)}
                  className="group relative block aspect-video w-full overflow-hidden rounded-2xl"
                >
                  <img
                    src={`https://img.youtube.com/vi/${episode.id}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover brightness-[0.82] transition-[filter] duration-300 group-hover:brightness-100"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="liquid-glass glass-solid absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full">
                    <PlayIcon />
                  </span>
                </button>
              )}
              <div className="flex items-start gap-3.5 px-1 py-5">
                <span className="t-label text-white/45 tabular-nums">{episode.n}</span>
                <p className="text-[0.9375rem] leading-snug text-white/78">{episode.title}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-center">
        <a
          href={radio.href}
          target="_blank"
          rel="noreferrer"
          className="text-[0.875rem] text-white/70 underline-offset-4 hover:text-white hover:underline"
        >
          {radio.cta}
        </a>
      </p>
    </Section>
  );
}
