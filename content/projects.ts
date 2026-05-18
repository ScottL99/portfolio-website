export type Project = {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Canvas",
    description: "Interactive online CV with spatial navigation.",
    tech: ["React", "TypeScript", "Motion"],
  },
  {
    title: "Web UI Project",
    description: "Responsive interface with reusable components.",
    tech: ["Next.js", "Tailwind"],
  },
  {
    title: "Dashboard UI",
    description: "Data-heavy admin surface with filters and charts.",
    tech: ["React", "API"],
  },
  {
    title: "E-commerce Flow",
    description: "Product listing, cart, and checkout interaction.",
    tech: ["Next.js", "Stripe"],
  },
  {
    title: "Animation Study",
    description: "Micro-interactions and transition experiments.",
    tech: ["GSAP", "CSS"],
  },
  {
    title: "Creative Landing",
    description: "Editorial homepage with responsive sections.",
    tech: ["React", "Figma"],
  },
  {
    title: "Form Builder",
    description: "Complex form states and validation patterns.",
    tech: ["TypeScript", "Zod"],
  },
  {
    title: "API Explorer",
    description: "Searchable API documentation interface.",
    tech: ["Next.js", "MDX"],
  },
  {
    title: "Mobile Layout",
    description: "Small-screen UI exploration and navigation.",
    tech: ["CSS", "A11y"],
  },
  {
    title: "Component Lab",
    description: "Reusable UI components and design tokens.",
    tech: ["Storybook", "Tailwind"],
  },
];
