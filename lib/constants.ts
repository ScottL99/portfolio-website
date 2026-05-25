export const SLIDES = ["home", "projects", "experience"] as const;

export type SlideId = (typeof SLIDES)[number];

export const PROJECT_EDGE_THRESHOLD = 8;
