export type Experience = {
  company?: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
};

export const experience: Experience = {
  role: "Front-end Developer",
  period: "2024 - Present",
  description:
    "Built and maintained responsive interfaces, implemented product features, and improved UI consistency across pages.",
  tech: ["React", "JavaScript", "CSS", "Responsive UI"],
};
