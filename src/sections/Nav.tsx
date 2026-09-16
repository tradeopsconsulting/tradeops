import { useEffect, useState } from "react";
import { ArrowUpRight, Button } from "@/components/Button";
import { BOOK_HREF, BOOK_LABEL, nav } from "@/content/copy";
import { cn } from "@/lib/cn";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative z-40">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-6 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="TradeOps, home">
          <img
            src="/tradeops-mark-white.png"
            alt=""
            width={261}
            height={268}
            className="h-8 w-auto"
          />
          <span className="sr-only">TradeOps</span>
        </a>
        <div className="flex items-center gap-3">
          <nav
            aria-label="Primary"
            className="liquid-glass glass-solid hidden items-center gap-1 rounded-full px-2 py-1.5 lg:flex"
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-[0.8125rem] text-white/62 transition-colors duration-200 hover:text-white motion-reduce:transition-none"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => {
              window.location.href = BOOK_HREF;
            }}
          >
            {BOOK_LABEL}
            <ArrowUpRight />
          </Button>
          <Button
            variant="glass"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden className="relative block h-[9px] w-[17px]">
              <span
                className={cn(
                  "absolute left-0 block h-px w-full bg-current transition-transform duration-300 motion-reduce:transition-none",
                  open ? "top-[4px] rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-full bg-current transition-transform duration-300 motion-reduce:transition-none",
                  open ? "top-[4px] -rotate-45" : "top-[8px]",
                )}
              />
            </span>
          </Button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary, mobile"
          className="border-t border-white/8 px-6 py-4 lg:hidden"
        >
          <ul className="divide-y divide-white/8">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-[0.9375rem] text-white/70 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4 sm:hidden">
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => {
                  window.location.href = BOOK_HREF;
                }}
              >
                {BOOK_LABEL}
                <ArrowUpRight />
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
