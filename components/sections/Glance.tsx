import Section from "@/components/Section";
import { glance, sectionLabels } from "@/content/site";

/* Black stat widget: four segmented tiles, dot-matrix numerals. */
export default function Glance({ index }: { index: string }) {
  return (
    <Section id="glance" index={index} label={sectionLabels.glance} compact>
      <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-widget bg-line-ink sm:grid-cols-2 lg:grid-cols-4">
        {glance.map((item) => (
          <div key={item.unit} className="flex flex-col gap-3 bg-ink p-6 text-on-ink">
            <dt className="label order-2 text-on-ink-mute">{item.unit}</dt>
            <dd className="order-1 flex flex-wrap items-baseline gap-x-2.5">
              {item.kind === "value" ? (
                <span className="font-display dots-round text-[40px] font-bold leading-none">
                  {item.value}
                </span>
              ) : (
                <>
                  <span className="font-mono text-[14px] text-on-ink-mute line-through">
                    {item.before}
                  </span>
                  <span aria-hidden="true" className="text-red">
                    {"\u2192"}
                  </span>
                  <span className="font-display dots-round text-[32px] font-bold leading-none">
                    {item.after}
                  </span>
                </>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
