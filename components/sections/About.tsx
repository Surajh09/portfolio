import Section from "@/components/Section";
import { about, sectionLabels } from "@/content/site";
import { cn } from "@/lib/cn";

export default function About({ index }: { index: string }) {
  return (
    <Section id="about" index={index} label={sectionLabels.about}>
      <div className="grid gap-4 text-[16.5px] leading-[1.6]">
        {about.paragraphs.map((text, i) => (
          <p
            key={i}
            className={cn("max-w-[34em]", i === 0 && "text-[18px] font-medium tracking-[-0.01em]")}
          >
            {text}
          </p>
        ))}
      </div>
    </Section>
  );
}
