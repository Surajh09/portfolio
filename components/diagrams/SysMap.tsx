import { sysmap } from "@/content/site";

/* AWS production stack, grouped by role (edge / VPC / foundation). */
export default function SysMap() {
  return (
    <figure aria-label={sysmap.ariaLabel} className="widget mt-1 grid gap-3 p-5">
      <div className="flex flex-wrap gap-2">
        {sysmap.edge.map((n) => (
          <span key={n} className="chip">
            {n}
          </span>
        ))}
      </div>

      <div className="relative grid gap-2 rounded-[16px] border border-dashed border-line-strong px-3 pb-3 pt-8">
        <span className="label absolute left-3.5 top-2.5 text-ink-mute">{sysmap.vpc.label}</span>
        <div className="flex">
          <span className="chip chip-dark flex-1">{sysmap.vpc.primary}</span>
        </div>
        {sysmap.vpc.rows.map((row, r) => (
          <div key={r} className="flex flex-wrap gap-2">
            {row.map((n) => (
              <span key={n} className="chip">
                {n}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {sysmap.foundation.map((n) => (
          <span key={n} className="chip">
            {n}
          </span>
        ))}
      </div>

      <figcaption className="pt-1 font-mono text-[11.5px] leading-relaxed text-ink-mute">
        {sysmap.caption}
      </figcaption>
    </figure>
  );
}
