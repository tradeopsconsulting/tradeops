import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "glass" | "ghost";
type Size = "sm" | "md" | "lg" | "icon";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:scale-[1.03] hover:bg-white/92 cursor-pointer",
  glass: "liquid-glass glass-solid text-white hover:scale-[1.03] cursor-pointer",
  ghost: "text-white/78 hover:text-white cursor-pointer",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-[0.8125rem]",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-[0.9375rem]",
  icon: "h-11 w-11 px-0",
};

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  className,
  variant = "glass",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[transform,background-color,border-color,color] duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={cn(
        "h-3 w-3 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-px group-hover:-translate-y-px motion-reduce:transition-none",
        className,
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9 9 3M4.2 3H9v4.8" />
    </svg>
  );
}

export function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn("h-4 w-4 text-white", className)}
      fill="currentColor"
    >
      <path d="M4.6 2.3a.6.6 0 0 1 .93-.5l7.1 4.8a.6.6 0 0 1 0 1l-7.1 4.8a.6.6 0 0 1-.93-.5Z" />
    </svg>
  );
}

export function Pill({
  chip,
  children,
  className,
}: {
  chip?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "liquid-glass glass-solid inline-flex items-center gap-2 rounded-full text-[0.75rem] leading-none text-white/70",
        chip ? "py-1 pr-4 pl-1" : "px-4 py-1.5",
        className,
      )}
    >
      {chip ? (
        <span className="rounded-full bg-white px-2.5 py-1 text-[0.6875rem] font-medium text-black">
          {chip}
        </span>
      ) : null}
      <span>{children}</span>
    </span>
  );
}
