import type { FigureData } from "@/content/site";
import { cn } from "@/lib/cn";

type Props = { data: FigureData; dark?: boolean; variant?: "inline" | "tile" };

/*
  Big stat ("50 documents / minute") or before -> after delta, set in the
  dot-matrix display face. When the data carries an ariaLabel the visual
  parts are hidden from assistive tech and the label is read instead.
*/
export default function Figure({ data, dark = false, variant = "inline" }: Props) {
  const mute = dark ? "text-on-ink-mute" : "text-ink-mute";
  const strong = dark ? "text-on-ink" : "text-ink";
  const frame =
    variant === "inline" ? cn("border-y py-3.5", dark ? "border-line-on-ink" : "border-line") : "";
  const ariaLabel = data.kind === "delta" ? data.ariaLabel : undefined;
  const hide = ariaLabel ? true : undefined;

  return (
    <p aria-label={ariaLabel} className={cn("flex flex-wrap items-baseline gap-x-3", frame)}>
      {data.kind === "value" ? (
        <span
          aria-hidden={hide}
          className={cn("font-display dots-round text-[44px] font-bold leading-none", strong)}
        >
          {data.value}
        </span>
      ) : (
        <>
          <span
            aria-hidden={hide}
            className={cn("font-mono text-[18px] line-through decoration-1", mute)}
          >
            {data.before}
          </span>
          <span aria-hidden="true" className="text-lg text-red">
            {"\u2192"}
          </span>
          <span
            aria-hidden={hide}
            className={cn("font-display dots-round text-[36px] font-bold leading-none", strong)}
          >
            {data.after}
          </span>
        </>
      )}
      <span aria-hidden={hide} className={cn("label mt-2 basis-full", mute)}>
        {data.unit}
      </span>
    </p>
  );
}
