import { useEffect, useState } from "react";
import { ArrowUpRight, Button } from "@/components/Button";
import { BOOK_HREF, BOOK_LABEL } from "@/content/copy";
import { cn } from "@/lib/cn";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("proof");
    if (!target || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.boundingClientRect.bottom < 0);
      },
      { threshold: 0 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 px-4 pb-4 transition-all duration-300 sm:px-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <div className="liquid-glass glass-solid mx-auto flex max-w-[720px] items-center justify-between gap-4 rounded-full px-3 py-2 pl-5">
        <p className="hidden text-[0.8125rem] text-white/70 sm:block">
          More booked jobs in six months, or we stop charging.
        </p>
        <Button
          variant="primary"
          size="sm"
          className="ml-auto"
          onClick={() => {
            window.location.href = BOOK_HREF;
          }}
        >
          {BOOK_LABEL}
          <ArrowUpRight />
        </Button>
      </div>
    </div>
  );
}
