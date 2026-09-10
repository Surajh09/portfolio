import Section from "@/components/Section";
import { speaking, sectionLabels } from "@/content/site";

export default function Speaking({ index }: { index: string }) {
  return (
    <Section id="speaking" index={index} label={sectionLabels.speaking} compact>
      <p className="text-[15px] font-semibold">{speaking.role}</p>
      <dl className="mt-4 grid">
        {speaking.talks.map((talk) => (
          <div
            key={talk.title}
            className="grid gap-1 border-t border-line py-3 md:grid-cols-[160px_minmax(0,1fr)] md:gap-x-8"
          >
            <dt className="text-sm font-medium">{talk.title}</dt>
            <dd className="max-w-[34em] text-[15px] text-ink-soft">{talk.text}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
