export type Profile = {
  name: string;
  role: string;
  intro: string[];
  email: string;
  githubUrl: string;
  linkedInUrl: string;
};

export const profile: Profile = {
  name: "Scott.Lin",
  role: "Front-end & Web Developer",
  intro: [
    "Hi! I am Scott, a front-end and web developer based in Adelaide.",
    "I create polished web experiences that sit between design, development, and real-world business needs, with hands-on experience building, maintaining, and deploying client-facing websites.",
    "My work spans responsive layouts, CMS customization, third-party integrations, debugging, performance improvements, and practical support for live digital products. I am also growing my skills in C#, back-end fundamentals, system design, and end-to-end web development.",
  ],
  email: "scott.lin@outlook.com.au",
  githubUrl: "https://github.com/",
  linkedInUrl: "https://www.linkedin.com/",
};
