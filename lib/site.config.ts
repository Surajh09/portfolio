/*
  Site configuration — the only file you should need to edit for links.
  Leave a value empty ("") and that link is omitted from the page instead of
  pointing somewhere broken.
*/
export const siteConfig = {
  email: "surajhemnani04@gmail.com",
  linkedin: "https://www.linkedin.com/in/suraj-hemnani-b4623a251/",
  github: "https://github.com/Surajh09",
  resume: "/resume.pdf",
  resumeFilename: "Suraj_Hemnani_Resume.pdf",
} as const;

export type SiteConfig = typeof siteConfig;
