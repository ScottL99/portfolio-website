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
  role: "Web Developer",
  intro: [
    "Hi! I am Scott, a web developer based in Adelaide.",
    "I build responsive, maintainable websites and web experiences using WordPress, Elementor, Next.js and React.",
    "My work covers CMS development, third-party integrations, interactive web experiences, deployment and ongoing technical support.",
    "I'm also expanding my back-end development skills, particularly in C# and system design, as I work towards becoming a more well-rounded developer.",
  ],
  cta: "If you have a website or web app to build, or any development opportunity to discuss, feel free to get in touch.",
  email: "scott.lin@outlook.com.au",
  githubUrl: "https://github.com/ScottL99",
  linkedInUrl: "https://www.linkedin.com/in/scottlin-au/",
};
