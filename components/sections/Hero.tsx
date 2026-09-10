import { hero } from "@/content/site";
import { buildLinks } from "@/lib/links";
import { LinkRow } from "@/components/LinkButton";
import GlyphRing from "@/components/GlyphRing";
import Ticker from "@/components/Ticker";

export default function Hero() {
  const links = buildLinks(["email", "resume", "github", "linkedin"]);
  return (
    <>
      <section
        id="top"
        className="relative flex min-h-[calc(100svh-var(--nav-h))] items-center pb-14 pt-10 md:pb-20 md:pt-16"
      >
        <div className="sitewrap grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div>
            <p className="label flex items-center gap-2.5 text-red">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-red" />
              {hero.role}
            </p>
            <h1 className="mt-6 font-display dots-round text-[clamp(44px,7.2vw,96px)] font-bold uppercase leading-[0.95]">
              {hero.name}
            </h1>
            <p className="mt-8 max-w-[24em] text-[clamp(20px,2.3vw,27px)] font-medium leading-[1.3] tracking-[-0.015em]">
              {hero.statement}
            </p>
            <p className="mt-4 max-w-[36em] text-ink-soft">{hero.support}</p>
            <LinkRow links={links} label="Links" className="mt-9" />
          </div>
          <div className="hidden justify-self-end text-ink lg:block">
            <GlyphRing className="w-[280px]" />
          </div>
        </div>
      </section>
      <Ticker items={hero.focus} label="Focus areas" />
    </>
  );
}
