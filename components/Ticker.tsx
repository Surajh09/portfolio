import { cn } from "@/lib/cn";

type Props = { items: readonly string[]; label: string };

const REPEAT = 4;

/*
  Uppercase mono marquee. The track holds two identical halves and slides by
  50% for a seamless loop; each half repeats the items so it always spans the
  viewport. Under prefers-reduced-motion the CSS shows one static, wrapping
  row and hides the repeats.
*/
export default function Ticker({ items, label }: Props) {
  const renderRow = (dupe: boolean) => (
    <ul
      aria-label={dupe ? undefined : label}
      aria-hidden={dupe || undefined}
      className={cn("flex shrink-0", dupe && "ticker-dupe")}
    >
      {Array.from({ length: REPEAT }, (_, r) =>
        items.map((item, i) => (
          <li
            key={`${r}-${i}`}
            aria-hidden={r > 0 || undefined}
            className={cn("label flex items-center gap-5 pr-5 text-ink-soft", r > 0 && "ticker-rep")}
          >
            <span>{item}</span>
            <span aria-hidden="true" className="size-1 rounded-full bg-red" />
          </li>
        )),
      )}
    </ul>
  );

  return (
    <div className="ticker relative z-10 overflow-hidden border-t border-line py-3">
      <div className="ticker-track">
        {renderRow(false)}
        {renderRow(true)}
      </div>
    </div>
  );
}
