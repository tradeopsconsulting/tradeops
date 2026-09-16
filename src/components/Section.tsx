import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Pill } from "@/components/Button";

export function Section({
  id,
  className,
  children,
  divider = true,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("px-6 py-24 sm:py-28", divider && "border-t border-white/8", className)}
    >
      <div className="mx-auto max-w-[1240px]">{children}</div>
    </section>
  );
}

export function Heading({
  eyebrow,
  sans,
  serif,
  align = "center",
  className,
}: {
  eyebrow?: string;
  sans: string;
  serif: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? <Pill>{eyebrow}</Pill> : null}
      <h2 className="t-row mt-7 max-w-[34ch] text-balance text-white">
        {sans} <em>{serif}</em>
      </h2>
    </div>
  );
}
