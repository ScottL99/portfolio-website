export type Profile = {
  name: string;
  role: string;
  intro: string[];
  cta: string;
  email: string;
  githubUrl: string;
  linkedInUrl: string;
};

export const profile: Profile = {
  name: "Scott.Lin",
  role: "Front-end & Web Developer",
  intro: [
    "Hi! I am Scott, a front-end and web developer based in Adelaide.",
    "I build responsive, maintainable websites and web experiences for real clients, from design implementation and CMS setup to deployment, debugging, and ongoing support.",
    "I am currently strengthening my C#, back-end fundamentals, and system design skills as I grow toward more complete end-to-end web development.",
  ],
  cta:
    "If you have a website or web app to build, or any development opportunity to discuss, feel free to get in touch.",
  email: "scott.lin@outlook.com.au",
  githubUrl: "https://github.com/",
  linkedInUrl: "https://www.linkedin.com/",
};
