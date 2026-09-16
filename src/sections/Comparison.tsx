import { useState } from "react";
import { Heading, Section } from "@/components/Section";
import { comparison } from "@/content/copy";

export function Comparison() {
  const [open, setOpen] = useState(false);
  const rows = open ? [...comparison.primary, ...comparison.extra] : comparison.primary;

  return (
    <Section id="versus">
      <Heading
        eyebrow={comparison.eyebrow}
        sans={comparison.headSans}
        serif={comparison.headSerif}
      />
      <div className="mt-14 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 pr-4 text-[0.75rem] font-medium text-white/45" />
              <th className="py-4 px-4 text-[0.75rem] font-medium text-white/45">
                {comparison.theirsLabel}
              </th>
              <th className="py-4 pl-4 text-[0.75rem] font-medium text-white">
                {comparison.oursLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-white/8 align-top">
                <th className="t-label py-5 pr-4 text-white">{row.label}</th>
                <td className="py-5 px-4 text-[0.9375rem] leading-relaxed text-white/52">
                  {row.theirs}
                </td>
                <td className="py-5 pl-4 text-[0.9375rem] leading-relaxed text-white">
                  {row.ours}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 text-center">
        <button
          type="button"
          className="text-[0.8125rem] text-white/62 underline-offset-4 hover:text-white hover:underline"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Show less" : "Full comparison"}
        </button>
      </div>
    </Section>
  );
}
