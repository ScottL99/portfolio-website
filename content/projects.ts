export type Project = {
  title: string;
  description: string;
  body: string;
  tech: string[];
  url?: string;
  urlNote?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Foundher",
    description: "Campaign website for a South Australian female founder grant.",
    body:
      "Built as a fast, polished launch site for a time-sensitive grant program supported by the Government of South Australia and Women in Innovation. The site communicates the program clearly, supports social campaign traffic, and tracks visitor activity through analytics during the campaign period.",
    tech: ["Next.js", "TS", "Tailwind CSS", "GA"],
    url: "https://foundhergrantprogram.com/",
  },
  {
    title: "Nightingale Research",
    description: "Corporate website with trials, forms, maps, and CMS.",
    body:
      "Designed and developed a full business website for a cardiovascular clinical trial organisation, covering brand presence, active trial listings, enquiry pathways, contact forms, maps, and multi-location information. A custom Sanity CMS supports trial content management and enquiry workflows, with analytics tracking for campaign and visitor insights.",
    tech: ["Next.js", "TS", "Tailwind CSS", "Sanity", "GA"],
    url: "https://nightingaleresearch.com.au/",
  },
  {
    title: "Oranje Creative",
    description: "Creative agency rebuild with motion and CMS content.",
    body:
      "Rebuilt the agency website with a stronger interactive direction, combining SVG graphics, motion-led hover states, page transitions, and different mobile/desktop behaviours. The site connects to Sanity for blogs and content updates, and includes podcast playback links and structured creative service content.",
    tech: ["Next.js", "TS", "Tailwind CSS", "Sanity", "Motion", "GA"],
    url: "https://oranjecreative.com/",
  },
  {
    title: "CareApp",
    description: "Website rebuild for CareApp, an application for care providers and families.",
    body:
      "Rebuilt the client website using WordPress and Elementor to match the client team's preferred editing workflow while improving the visual system, responsive layouts, and content consistency. The project included reusable post templates, plugin configuration, CRM integration support, chat tools, and analytics tracking.",
    tech: ["WordPress", "Elementor", "HubSpot", "GA"],
    url: "https://careapp.com.au/",
  },
  {
    title: "Senator Liddle",
    description: "Public-facing WordPress site for a South Australian senator.",
    body:
      "Created a new image-led website for a public client, using WordPress and Elementor to support regular content updates across media, speeches, portfolio items, and news-style posts. The front-end structure keeps recurring updates visually consistent while giving the client a clearer way to present key messages and story-driven content.",
    tech: ["WordPress", "Elementor", "GA"],
    url: "https://kerrynneliddle.com.au/",
  },
  {
    title: "wilko.ai",
    description: "One-page startup website with long-form product messaging.",
    body:
      "Built a fast one-page marketing site for an early-stage startup, focused on clear positioning, long-form product explanation, mobile responsiveness, and conversion-oriented calls to action. The site presents a structured service model with simple access information and analytics tracking.",
    tech: ["Next.js", "TS", "Tailwind CSS", "GA"],
    url: "https://wilkoai.com/",
  },
  {
    title: "Snowden Fine String Instruments",
    description: "Lightweight CMS website for a local instruments business.",
    body:
      "Developed a small but polished promotional website for a local instruments business, with a lightweight content structure and Sanity CMS integration so the client can update featured instruments and current inventory without developer support.",
    tech: ["Next.js", "TS", "Tailwind CSS", "Sanity", "GA"],
    url: "https://michaelsnowdenfinestringinstruments.com/",
  },
  {
    title: "Fearless Innovator",
    description: "Archived campaign site for a women founders grant program.",
    body:
      "Built a compact campaign website for the Fearless Innovator grant program, a previous initiative supporting South Australian women business founders. The site supported social media launch activity and analytics tracking; it is now kept as an archived program page with disconnected API functionality.",
    tech: ["Next.js", "TS", "Tailwind CSS", "GA"],
    url: "https://website-fearless-innovator.vercel.app/",
    urlNote: "archived program page",
  },
];
