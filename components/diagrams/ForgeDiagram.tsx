import { forgeDiagram as d } from "@/content/site";

/* Forge concept diagram, styled for the black featured widget. */

function Column({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="grid min-w-0 gap-1.5">
      <span className="label mb-0.5 text-on-ink-mute">{label}</span>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-xl border border-line-on-ink px-2 py-2 text-center font-mono text-[11.5px] text-on-ink"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Link({ text }: { text: string }) {
  return (
    <div
      aria-hidden="true"
      className="flex items-center gap-2 font-mono text-[10px] text-on-ink-mute md:flex-col md:pt-10"
    >
      <span className="h-3.5 w-px bg-line-on-ink md:h-px md:w-5" />
      <span>{text}</span>
    </div>
  );
}

export default function ForgeDiagram() {
  return (
    <figure
      aria-label={d.ariaLabel}
      className="grid gap-3 rounded-[18px] border border-line-on-ink bg-ink-raised p-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.2fr)_auto_minmax(0,1fr)] md:items-start md:gap-3.5 md:p-5"
    >
      <Column label={d.features.label} items={d.features.items} />
      <Link text={d.ownsLink} />
      <div className="grid min-w-0 gap-1.5">
        <span className="label mb-0.5 text-on-ink-mute">{d.core.label}</span>
        <span className="rounded-xl border border-red bg-red/10 px-2 py-3.5 text-center font-mono text-[11.5px] text-on-ink">
          {d.core.box}
        </span>
        <span className="text-center font-mono text-[10.5px] text-on-ink-mute">{d.core.sub}</span>
      </div>
      <Link text={d.accessLink} />
      <Column label={d.consumers.label} items={d.consumers.items} />
    </figure>
  );
}
