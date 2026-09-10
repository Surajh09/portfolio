import Section from "@/components/Section";
import ForgeDiagram from "@/components/diagrams/ForgeDiagram";
import { projects, sectionLabels } from "@/content/site";

export default function Projects({ index }: { index: string }) {
  const { forge, nexus, lab } = projects;
  return (
    <Section id="projects" index={index} label={sectionLabels.projects}>
      <div className="grid gap-4">
        {/* Featured: black widget */}
        <article className="widget-dark grid gap-7 p-6 md:p-8">
          <div className="grid gap-4">
            <p className="label flex items-center gap-2 text-red">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-red" />
              {forge.kind}
            </p>
            <h3 className="font-display dots-round text-[40px] font-bold uppercase leading-none">
              {forge.title}
            </h3>
            <p className="max-w-[30em] text-[17px] font-medium leading-[1.45] tracking-[-0.01em]">
              {forge.desc}
            </p>
            <p className="max-w-[36em] text-[15px] text-on-ink-soft">{forge.body}</p>
            <p className="font-mono text-[12px] leading-relaxed text-on-ink-mute">{forge.tech}</p>
            <ul aria-label="Key concepts" className="flex flex-wrap gap-2">
              {forge.terms.map((term) => (
                <li
                  key={term}
                  className="rounded-full border border-line-on-ink px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-on-ink-soft"
                >
                  {term}
                </li>
              ))}
            </ul>
          </div>
          <ForgeDiagram />
        </article>

        {/* Secondary: white widget */}
        <article className="widget grid gap-3 p-6 md:grid-cols-[200px_minmax(0,1fr)] md:gap-x-8 md:p-7">
          <div className="grid content-start gap-1.5">
            <h3 className="text-[22px] font-semibold tracking-tight">{nexus.title}</h3>
            <p className="label text-red">{nexus.kind}</p>
          </div>
          <div className="grid max-w-[34em] gap-3">
            <p className="text-[16.5px] font-medium leading-[1.45] tracking-[-0.01em]">{nexus.desc}</p>
            <p className="text-[15px] text-ink-soft">{nexus.body}</p>
            <p className="font-mono text-[12px] leading-relaxed text-ink-mute">{nexus.tech}</p>
          </div>
        </article>

        {/* Compact */}
        <article className="widget grid gap-2 p-6 md:grid-cols-[200px_minmax(0,1fr)] md:gap-x-8 md:p-7">
          <h3 className="text-base font-semibold tracking-tight">{lab.title}</h3>
          <div className="grid max-w-[34em] gap-2">
            <p className="text-[15px] text-ink-soft">{lab.body}</p>
            <p className="font-mono text-[12px] leading-relaxed text-ink-mute">{lab.tech}</p>
          </div>
        </article>
      </div>
    </Section>
  );
}
