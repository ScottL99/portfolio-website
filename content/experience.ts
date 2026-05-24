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
    "Build, maintain, and deploy responsive websites for client-facing projects, working across design implementation, front-end development, CMS setup, and ongoing production support.",
    "Develop practical website features, integrate third-party tools and plugins, troubleshoot live-site issues, and improve usability, performance, and stability across existing websites.",
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
