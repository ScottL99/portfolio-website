export const SLIDES = ["home", "projects", "experience"] as const;

export type SlideId = (typeof SLIDES)[number];

export const SAFE_AREA = {
  x: 80,
  y: 80,
};

export const PROJECT_EDGE_THRESHOLD = 8;
