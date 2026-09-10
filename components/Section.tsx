import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { cn } from "@/lib/cn";

type Props = {
  id: string;
  index: string;
  label: string;
  compact?: boolean;
  className?: string;
  children: ReactNode;
};

/*
  Shared section shell: a sticky header column (dot-matrix index numeral,
  mono label with red glyph dot) and a revealed body column.
*/
export default function Section({ id, index, label, compact = false, className, children }: Props) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "border-t border-line",
        compact ? "py-10 md:py-14 lg:py-16" : "py-16 md:py-24 lg:py-28",
        className,
      )}
    >
      <div className="sitewrap grid gap-6 md:grid-cols-[160px_minmax(0,1fr)] md:items-start md:gap-x-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-x-20">
        <h2
          id={headingId}
          className="grid content-start gap-2.5 md:sticky md:top-[calc(var(--nav-h)+28px)]"
        >
          <span
            aria-hidden="true"
            className="font-display dots-round text-[34px] font-bold leading-none text-ink"
          >
            {index}
          </span>
          <span className="label flex items-center gap-2 text-ink-mute">
            <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-red" />
            {label}
          </span>
        </h2>
        <Reveal className="min-w-0 max-w-[760px]">{children}</Reveal>
      </div>
    </section>
  );
}
