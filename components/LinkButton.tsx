import type { SiteLink } from "@/lib/links";
import { cn } from "@/lib/cn";

type Props = { link: SiteLink; primary?: boolean; onDark?: boolean };

/* Pill link. Primary is filled; secondary is outlined. onDark inverts for black widgets. */
export default function LinkButton({ link, primary = false, onDark = false }: Props) {
  const tone = onDark
    ? primary
      ? "bg-on-ink text-ink hover:bg-red hover:text-on-ink"
      : "border border-line-on-ink text-on-ink hover:border-on-ink"
    : primary
      ? "bg-ink text-on-ink hover:bg-red"
      : "border border-line-strong text-ink hover:border-ink";

  return (
    <a
      href={link.href}
      download={link.download}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "me noopener" : undefined}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200",
        tone,
      )}
    >
      {link.label}
      {link.external && (
        <span aria-hidden="true" className="text-[12px] leading-none">
          {"\u2197"}
        </span>
      )}
    </a>
  );
}

type RowProps = { links: SiteLink[]; label: string; onDark?: boolean; className?: string };

/* A row of pill links; the first one is rendered as primary. */
export function LinkRow({ links, label, onDark = false, className }: RowProps) {
  if (links.length === 0) return null;
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2.5", className)}>
      {links.map((link, i) => (
        <li key={link.key}>
          <LinkButton link={link} primary={i === 0} onDark={onDark} />
        </li>
      ))}
    </ul>
  );
}
