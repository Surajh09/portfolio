import Section from "@/components/Section";
import { currently, sectionLabels } from "@/content/site";

export default function Currently({ index }: { index: string }) {
  return (
    <Section id="currently" index={index} label={sectionLabels.currently} compact>
      <p className="flex max-w-[34em] items-start gap-3.5 text-[19px] font-medium leading-[1.45] tracking-[-0.01em]">
        <span
          aria-hidden="true"
          className="mt-2 size-2 shrink-0 rounded-full bg-red animate-glyph-pulse"
        />
        {currently.lead}
      </p>
      <ul aria-label="Current areas" className="mt-6 flex flex-wrap gap-2">
        {currently.tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>
    </Section>
  );
}
