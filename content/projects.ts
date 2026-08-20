export type Project = {
  title: string;
  description: string;
  body: string;
  tech: string[];
  url?: string;
  urlNote?: string;
  additionalUrls?: Array<{
    label: string;
    url: string;
  }>;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "This portfolio website, built with Codex.",
    body:
      "Designed and implemented this portfolio website through an iterative Codex workflow, including the responsive canvas layout, mobile scroll experience, project accordion, content structure, and deployment-ready Next.js setup.",
    tech: ["Codex", "Next.js"],
  },
  {
    title: "Nightingale Research",
    description: "CMS website with trials, enquiry forms, and maps.",
    body:
      "Built a full corporate website with active trial listings, enquiry forms, location maps, contact pathways, and a custom Sanity CMS for managing trial content. Added analytics tracking to support campaign and visitor insight.",
    tech: ["Next.js", "TS", "Tailwind CSS", "Sanity", "GA"],
    url: "https://nightingaleresearch.com.au/",
  },
  {
    title: "Graeme Koehne",
    description: "Composer website with music catalogues, recordings, and media.",
    body:
      "Built a refined composer portfolio website for Graeme Koehne, with structured sections for biography, works, recordings, media, and contact. The site presents a large body of music through a clean editorial layout, making it easy to browse by category while keeping the overall experience elegant and focused.",
    tech: ["Next.js", "TS", "Tailwind CSS"],
    url: "https://graemekoehne.com/",
  },
  {
    title: "Snowden Fine String Instruments",
    description: "Instrument maker website with editable guitar collections.",
    body:
      "Built a refined website for Michael Snowden's handcrafted steel-string guitars, featuring the maker's story, detailed instrument collections, build philosophy, artists, and enquiries. Connected Sanity so the client can keep guitar details and site content up to date.",
    tech: ["Next.js", "Sanity"],
    url: "https://michaelsnowdenfinestringinstruments.com/",
  },
  {
    title: "Foundher",
    description: "Fast campaign site for a SA female founder grant.",
    body:
      "Built a polished temporary launch site for a grant campaign, with responsive layouts, clear application pathways, social campaign support, and GA tracking for visitor activity during the program period.",
    tech: ["Next.js", "TS", "Tailwind CSS", "GA"],
    url: "https://foundhergrantprogram.com/",
  },
  {
    title: "CareApp",
    description: "WordPress rebuild with CRM and plugin integrations.",
    body:
      "Rebuilt the site in WordPress and Elementor to match the client's editing workflow while improving responsive layouts and visual consistency. Set up reusable post templates, plugin configuration, HubSpot CRM support, chat tools, and analytics tracking.",
    tech: ["WordPress", "Elementor", "HubSpot", "GA"],
    url: "https://careapp.com.au/",
    additionalUrls: [
      {
        label: "original launch version",
        url: "https://melindap12.sg-host.com/",
      },
    ],
  },
  {
    title: "Oranje Creative",
    description: "Agency rebuild with motion, CMS content, and podcasts.",
    body:
      "Rebuilt the agency website with SVG graphics, motion-led hover states, page transitions, and separate mobile/desktop interaction patterns. Connected Sanity for blog/content updates and integrated podcast playback links.",
    tech: ["Next.js", "TS", "Tailwind CSS", "Sanity", "Motion", "GA"],
    url: "https://oranjecreative.com/",
  },
  {
    title: "Senator Liddle",
    description: "WordPress site with reusable content templates.",
    body:
      "Built a public-facing WordPress site with Elementor templates for media, speeches, portfolio items, and news-style updates. Structured the front end so recurring content stays consistent and easier for the client to maintain.",
    tech: ["WordPress", "Elementor", "GA"],
    url: "https://kerrynneliddle.com.au/",
  },
  {
    title: "Fearless Innovator",
    description: "Archived grant campaign site with analytics tracking.",
    body:
      "Built a compact campaign website for a previous grant program, supporting social media launch activity, clear program information, and GA tracking. The site is now kept as an archived page with disconnected API functionality.",
    tech: ["Next.js", "TS", "Tailwind CSS", "GA"],
    url: "https://website-fearless-innovator.vercel.app/",
    urlNote: "archived program page",
  },
];
