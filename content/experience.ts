export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
};

export const experience: Experience = {
  company: "Oranje Creative",
  role: "Web Developer",
  period: "Nov 2023 - Present",
  description: [
    "Build responsive client websites from designers' drafts, handling website development, CMS setup, deployment, and ongoing production support.",
    "Maintain existing websites, develop new features, and integrate third-party tools and plugins to improve usability, performance, and stability.",
    "Create animated and visual content for digital campaigns and social media, while supporting internal and client IT needs across web platforms and website operations.",
  ],
  tech: [
    "JS",
    "TS",
    "React",
    "Next.js",
    "Sanity",
    "WordPress",
    "Elementor",
    "Figma",
    "Adobe (AE/PS/PR)",
  ],
};
