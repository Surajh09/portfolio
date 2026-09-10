import type { CaseBlock, CaseStudy } from "@/content/site";
import { experience, sectionLabels } from "@/content/site";
import Section from "@/components/Section";
import Figure from "@/components/Figure";
import SysMap from "@/components/diagrams/SysMap";

function Block({ block }: { block: CaseBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "note":
      return <p className="font-mono text-[12.5px] text-red-deep">{block.text}</p>;
    case "sysmap":
      return <SysMap />;
    case "figure":
      return <Figure data={block.figure} />;
    default:
      return null;
  }
}

function Case({ study, n }: { study: CaseStudy; n: number }) {
  return (
    <article className="grid gap-3 border-b border-line py-7 last:border-b-0 md:grid-cols-[160px_minmax(0,1fr)] md:gap-x-8 lg:grid-cols-[200px_minmax(0,1fr)]">
      <div>
        <p className="label mb-2 text-ink-mute">{String(n).padStart(2, "0")}</p>
        <h4 className="text-[15px] font-semibold leading-[1.3] tracking-[-0.01em]">{study.title}</h4>
        <p className="mt-2 font-mono text-[11.5px] leading-normal text-ink-mute">{study.tech}</p>
      </div>
      <div className="grid max-w-[34em] gap-3.5 text-[15.5px] text-ink-soft [&>p:first-child]:border-t-0 [&>p:first-child]:text-ink">
        {study.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </article>
  );
}

export default function Experience({ index }: { index: string }) {
  const { role, cases, earlier } = experience;
  return (
    <Section id="experience" index={index} label={sectionLabels.experience}>
      <header className="flex flex-col gap-1.5 border-b border-line-strong pb-4 md:flex-row md:items-end md:justify-between md:gap-6">
        <div>
          <h3 className="text-[22px] font-semibold tracking-tight">{role.company}</h3>
          <p className="mt-0.5 text-[15px] text-ink-soft">{role.title}</p>
        </div>
        <p className="label whitespace-nowrap text-ink-mute">{role.dates}</p>
      </header>

      <div>
        {cases.map((study, i) => (
          <Case key={study.title} study={study} n={i + 1} />
        ))}
      </div>

      <header className="mt-14 flex flex-col gap-1.5 border-t border-line pt-4 md:flex-row md:justify-between md:gap-6">
        <div>
          <h3 className="text-base font-semibold">{earlier.company}</h3>
          <p className="mt-0.5 max-w-[32em] text-sm text-ink-soft">{earlier.title}</p>
        </div>
        <p className="label whitespace-nowrap text-ink-mute">{earlier.dates}</p>
      </header>
    </Section>
  );
}
