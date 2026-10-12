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
    body: "Designed and implemented this portfolio website through an iterative Codex workflow, including the responsive canvas layout, mobile scroll experience, project accordion, content structure, and deployment-ready Next.js setup.",
    tech: ["Codex", "Next.js"],
  },
  {
    title: "Nightingale Research",
    description: "CMS website with trials, enquiry forms, and maps.",
    body: "Built a corporate website with active trial listings, enquiry forms, location maps, and contact pathways. Defined Sanity content schemas, customised Sanity Studio for managing trial content, and integrated the CMS with the Next.js front end. Added analytics tracking to support campaign and visitor insights.",
    tech: ["Next.js", "TS", "Tailwind CSS", "Sanity", "GA"],
    url: "https://nightingaleresearch.com.au/",
  },
  {
    title: "Graeme Koehne",
    description:
      "Composer website with music catalogues, recordings, and media.",
    body: "Built a refined composer portfolio website for Graeme Koehne, with structured sections for biography, works, recordings, media, and contact. The site presents a large body of music through a clean editorial layout, making it easy to browse by category while keeping the overall experience elegant and focused.",
    tech: ["Next.js", "TS", "Tailwind CSS", "GA"],
    url: "https://graemekoehne.com/",
  },
  {
    title: "Snowden Fine String Instruments",
    description: "Instrument maker website with editable guitar collections.",
    body: "Built a refined website for Michael Snowden's handcrafted steel-string guitars, featuring the maker's story, detailed instrument collections, build philosophy, artists, and enquiries. Connected Sanity so the client can keep guitar details and site content up to date.",
    tech: ["Next.js", "TS", "Tailwind CSS", "Sanity"],
    url: "https://michaelsnowdenfinestringinstruments.com/",
  },
  {
    title: "FoundHer",
    description: "Campaign website delivered on a short timeline for a South Australian female founder grant program.",
    body: "Delivered a responsive campaign website on a short timeline for FoundHer, a grant program expected to run for two years. Built clear application pathways and program information to support social campaigns, configured Stripe and integrated Stripe Payment Links for supporter contributions, and added GA tracking for visitor activity.",
    tech: ["Next.js", "TS", "Tailwind CSS", "Stripe Payment Links", "GA"],
    url: "https://foundhergrantprogram.com/",
  },
  {
    title: "CareApp",
    description: "WordPress rebuild with CRM and plugin integrations.",
    body: "Rebuilt the site in WordPress and Elementor to match the client's editing workflow while improving responsive layouts and visual consistency. Set up reusable post templates, plugin configuration, HubSpot CRM support, chat tools, and analytics tracking.",
    tech: ["WordPress", "Elementor", "HubSpot", "GA"],
    url: "https://careapp.com.au/",
  },
  {
    title: "Oranje Creative",
    description: "Agency rebuild with motion, CMS content, and podcasts.",
    body: "Rebuilt the agency website with SVG graphics, motion-led hover states, page transitions, and separate mobile/desktop interaction patterns. Connected Sanity for blog/content updates and integrated podcast playback links.",
    tech: ["Next.js", "TS", "Tailwind CSS", "Sanity", "Motion", "GA"],
    url: "https://oranjecreative.com/",
  },
  {
    title: "Women in Innovation",
    description: "Ongoing website, membership, and payment system maintenance.",
    body: "Provide ongoing website management and maintenance for Women in Innovation, including page updates, general site upkeep, MemberPress membership system support, and payment system maintenance for the organisation's community and awards activity.",
    tech: ["Website Maintenance", "WordPress", "MemberPress"],
    url: "https://womenininnovation.com.au/",
  },
  {
    title: "Senator Liddle",
    description: "WordPress site with reusable content templates.",
    body: "Built a WordPress website using Elementor, with reusable templates for media releases, speeches, portfolio items and news updates. Focused on consistent layouts and making it easy for the client to manage and update content independently.",
    tech: ["WordPress", "Elementor", "GA"],
    url: "https://kerrynneliddle.com.au/",
  },
  {
    title: "Fearless Innovator",
    description: "Grant campaign website for a completed program, since succeeded by FoundHer.",
    body: "Built a compact campaign website for the Fearless Innovator grant program, supporting social media launch activity, clear program information, and GA tracking. The program has since ended and the website has been taken offline. FoundHer succeeded the program.",
    tech: ["Next.js", "TS", "Tailwind CSS", "GA"],
  },
];
