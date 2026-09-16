import { logos } from "@/content/copy";
import { cn } from "@/lib/cn";

export function LogoStrip() {
  return (
    <section className="border-t border-white/8 px-6">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-7 py-14">
        <p className="text-[0.75rem] tracking-wide text-white/52">{logos.label}</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {logos.items.map((item) => (
            <li key={item.name}>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "font-display text-[1.75rem] italic text-white/65 transition-colors hover:text-white motion-reduce:transition-none",
                  )}
                >
                  {item.name}
                </a>
              ) : (
                <span className="font-display text-[1.75rem] italic text-white/65">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
