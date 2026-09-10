import Section from "@/components/Section";
import { education, sectionLabels } from "@/content/site";

export default function Education({ index }: { index: string }) {
  return (
    <Section id="education" index={index} label={sectionLabels.education} compact>
      <div className="flex flex-col gap-1.5 md:flex-row md:items-start md:justify-between md:gap-6">
        <div>
          <h3 className="text-base font-semibold">{education.degree}</h3>
          <p className="mt-0.5 text-[15px] text-ink-soft">{education.school}</p>
        </div>
        <p className="label whitespace-nowrap text-ink-mute">{education.dates}</p>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {education.achievements.map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
