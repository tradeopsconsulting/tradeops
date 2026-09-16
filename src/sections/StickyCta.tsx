import { useEffect, useState } from "react";
import { ArrowUpRight, Button } from "@/components/Button";
import { BOOK_HREF, BOOK_LABEL } from "@/content/copy";
import { cn } from "@/lib/cn";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const proof = document.getElementById("proof");
      const audit = document.getElementById("audit");
      if (!proof) return;
      const pastProof = proof.getBoundingClientRect().bottom < 64;
      const auditInView = audit
        ? audit.getBoundingClientRect().top < window.innerHeight - 96
        : false;
      setVisible(pastProof && !auditInView);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 transition-all duration-300 sm:px-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <div className="liquid-glass glass-solid mx-auto flex max-w-[720px] items-center justify-between gap-4 rounded-full px-3 py-2 pl-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
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
