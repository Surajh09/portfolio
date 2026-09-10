import { footer } from "@/content/site";
import { cn } from "@/lib/cn";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line py-6">
      <div className="sitewrap flex flex-wrap items-center justify-between gap-4 font-mono text-[11.5px] text-ink-mute">
        <p>{footer.line}</p>
        <p aria-hidden="true" className="hidden items-center gap-1.5 md:flex">
          {Array.from({ length: 9 }, (_, i) => (
            <span
              key={i}
              className={cn("size-1 rounded-full", i === 4 ? "bg-red" : "bg-line-strong")}
            />
          ))}
        </p>
        <p>{footer.note}</p>
      </div>
    </footer>
  );
}
