import Section from "@/components/Section";
import { systems, sectionLabels } from "@/content/site";

/* 2x2 grid of white widgets, one per system. */
export default function Systems({ index }: { index: string }) {
  return (
    <Section id="systems" index={index} label={sectionLabels.systems}>
      <div className="grid gap-3 sm:grid-cols-2">
        {systems.map((s, i) => (
          <article key={s.title} className="widget flex flex-col gap-3 p-6">
            <p className="label flex items-center justify-between text-ink-mute">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span aria-hidden="true" className="size-1.5 rounded-full bg-ink" />
            </p>
            <h3 className="mt-3 text-[17px] font-semibold tracking-tight">{s.title}</h3>
            <p className="font-mono text-[12px] leading-relaxed text-red-deep">{s.tech}</p>
            <p className="text-[15px] text-ink-soft">{s.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
