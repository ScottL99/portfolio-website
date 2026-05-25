export const SLIDES = ["home", "projects", "experience"] as const;

export type SlideId = (typeof SLIDES)[number];

export const MOBILE_CANVAS_QUERY = "(max-width: 1023px)";

export const PROJECT_EDGE_THRESHOLD = 8;
