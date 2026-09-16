import { ArrowUpRight, Button, Pill } from "@/components/Button";
import { HeroVideo } from "@/components/HeroVideo";
import { Nav } from "@/sections/Nav";
import { BOOK_HREF, hero } from "@/content/copy";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[94svh] overflow-hidden">
      <HeroVideo dim={0.2} horizon={0} vignette={1} foot={16} />
      <div className="relative z-10 flex min-h-[94svh] flex-col">
        <Nav />
        <div className="flex flex-1 flex-col items-center px-6 pt-14 pb-24 text-center sm:pt-20 md:pt-24">
          <Pill className="animate-fade-rise mb-6">{hero.eyebrow}</Pill>
          <h1 className="t-display animate-fade-rise max-w-[22ch] text-balance text-white">
            {hero.h1Sans} {hero.h1Serif}
          </h1>
          <p className="animate-fade-rise-delay mt-7 max-w-[48ch] text-[0.9375rem] leading-[1.8] text-white/58 sm:text-base">
            {hero.sub}
          </p>
          <div className="animate-fade-rise-delay-2 mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                window.location.href = BOOK_HREF;
              }}
            >
              {hero.ctaPrimary}
              <ArrowUpRight />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() =>
                document
                  .getElementById("results")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              {hero.ctaSecondary}
              <PlayChevron />
            </Button>
          </div>
          <p className="animate-fade-rise-delay-2 mt-4 text-[0.8125rem] text-white/52">
            {hero.micro}
          </p>
        </div>
      </div>
    </section>
  );
}

function PlayChevron() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className="h-3 w-3 shrink-0" fill="currentColor">
      <path d="M3.4 2.3a.5.5 0 0 1 .77-.42l5.1 3.28a.5.5 0 0 1 0 .84l-5.1 3.28a.5.5 0 0 1-.77-.42Z" />
    </svg>
  );
}
