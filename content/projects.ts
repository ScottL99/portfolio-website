export type Project = {
  title: string;
  description: string;
  body: string;
  tech: string[];
  url?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Canvas",
    description: "Interactive online CV with spatial navigation.",
    body:
      "A personal portfolio concept designed as a focused canvas experience, combining desktop slide navigation with a mobile-first natural scroll layout.",
    tech: ["React", "TypeScript", "Motion"],
  },
  {
    title: "Web UI Project",
    description: "Responsive interface with reusable components.",
    body:
      "A polished front-end interface focused on reusable UI patterns, responsive spacing, and maintainable component structure.",
    tech: ["Next.js", "Tailwind"],
  },
  {
    title: "Dashboard UI",
    description: "Data-heavy admin surface with filters and charts.",
    body:
      "An admin-style interface exploration for scanning, filtering, and comparing operational data in a clean layout.",
    tech: ["React", "API"],
  },
  {
    title: "E-commerce Flow",
    description: "Product listing, cart, and checkout interaction.",
    body:
      "A shopping flow prototype covering product browsing, cart state, and checkout interaction patterns.",
    tech: ["Next.js", "Stripe"],
  },
  {
    title: "Animation Study",
    description: "Micro-interactions and transition experiments.",
    body:
      "A collection of motion studies exploring interface feedback, section transitions, and small interaction details.",
    tech: ["GSAP", "CSS"],
  },
  {
    title: "Creative Landing",
    description: "Editorial homepage with responsive sections.",
    body:
      "A responsive landing page exercise balancing editorial layout, visual hierarchy, and practical content structure.",
    tech: ["React", "Figma"],
  },
  {
    title: "Form Builder",
    description: "Complex form states and validation patterns.",
    body:
      "A form-heavy UI experiment focused on state management, validation feedback, and clearer input flows.",
    tech: ["TypeScript", "Zod"],
  },
  {
    title: "API Explorer",
    description: "Searchable API documentation interface.",
    body:
      "A documentation-style interface for browsing API endpoints, examples, and structured technical content.",
    tech: ["Next.js", "MDX"],
  },
  {
    title: "Mobile Layout",
    description: "Small-screen UI exploration and navigation.",
    body:
      "A mobile interaction study focused on compact navigation, touch-friendly controls, and readable small-screen layouts.",
    tech: ["CSS", "A11y"],
  },
  {
    title: "Component Lab",
    description: "Reusable UI components and design tokens.",
    body:
      "A component playground for testing reusable interface pieces, spacing systems, and token-driven styling.",
    tech: ["Storybook", "Tailwind"],
  },
];
