import { siteConfig } from "./site.config";

export type SiteLink = {
  key: "github" | "linkedin" | "email" | "resume";
  label: string;
  href: string;
  external: boolean;
  download?: string;
};

/*
  Builds the list of visible contact links from the config. Any link whose
  value is empty is dropped, so an unset LinkedIn/GitHub never renders as a
  broken anchor. `order` controls which links appear and in what sequence.
*/
export function buildLinks(order: SiteLink["key"][]): SiteLink[] {
  const hrefFor: Record<SiteLink["key"], string> = {
    email: siteConfig.email ? `mailto:${siteConfig.email}` : "",
    linkedin: siteConfig.linkedin,
    github: siteConfig.github,
    resume: siteConfig.resume,
  };
  const labelFor: Record<SiteLink["key"], string> = {
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    resume: "Resume",
  };

  return order.flatMap((key) => {
    const href = hrefFor[key];
    if (!href) return [];
    return [
      {
        key,
        label: labelFor[key],
        href,
        external: /^https?:/.test(href),
        download: key === "resume" ? siteConfig.resumeFilename : undefined,
      },
    ];
  });
}
