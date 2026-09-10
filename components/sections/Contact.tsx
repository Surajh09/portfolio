import Reveal from "@/components/Reveal";
import GlyphRing from "@/components/GlyphRing";
import { LinkRow } from "@/components/LinkButton";
import { buildLinks } from "@/lib/links";
import { contact, sectionLabels } from "@/content/site";

/* Closing CTA as one large black widget with a faint glyph ring. */
export default function Contact({ index }: { index: string }) {
  const links = buildLinks(["email", "linkedin", "github", "resume"]);
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-line py-16 md:py-24 lg:py-28"
    >
      <div className="sitewrap">
        <Reveal>
          <div className="widget-dark relative overflow-hidden p-8 md:p-14">
            <GlyphRing className="pointer-events-none absolute -right-20 -top-20 w-[360px] text-on-ink opacity-[0.18] md:-right-16 md:-top-24 md:w-[440px]" />
            <p className="label relative flex items-center gap-2.5 text-on-ink-mute">
              <span
                aria-hidden="true"
                className="font-display dots-round text-[18px] font-bold leading-none text-on-ink"
              >
                {index}
              </span>
              <span aria-hidden="true" className="size-1.5 rounded-full bg-red" />
              {sectionLabels.contact}
            </p>
            <h2
              id="contact-heading"
              className="relative mt-8 max-w-[12em] font-display dots-round text-[clamp(36px,5.5vw,72px)] font-bold uppercase leading-[0.98]"
            >
              {contact.heading}
            </h2>
            <LinkRow links={links} label="Contact" onDark className="relative mt-10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
