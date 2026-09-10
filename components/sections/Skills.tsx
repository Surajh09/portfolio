import Section from "@/components/Section";
import { skills, sectionLabels } from "@/content/site";

export default function Skills({ index }: { index: string }) {
  return (
    <Section id="skills" index={index} label={sectionLabels.skills}>
      <dl className="widget grid px-6">
        {skills.map((row) => (
          <div
            key={row.label}
            className="grid gap-1.5 border-b border-line py-4 last:border-b-0 md:grid-cols-[160px_minmax(0,1fr)] md:gap-x-8"
          >
            <dt className="text-sm font-semibold">{row.label}</dt>
            <dd className="font-mono text-[12.5px] leading-[1.7] text-ink-soft">{row.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
