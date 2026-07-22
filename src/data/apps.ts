export type AppStatus = "live" | "building";
export type AppSize = "featured" | "half" | "third";

export interface App {
  id: string;
  name: string;
  url: string;
  subdomain: string;
  studio: "eend" | "Mnemo";
  tag: string;
  problem: string;
  solution: string;
  status: AppStatus;
  size: AppSize;
  screengrab: string | null;
  accent: string;
}

export const apps: App[] = [
  {
    id: "ministry-of-susan",
    name: "Ministry of Susan",
    url: "https://susan.mnemolabs.app",
    subdomain: "susan.mnemolabs.app",
    studio: "Mnemo",
    tag: "Eldercare AI",
    problem:
      "Caring for an elderly parent is invisible, exhausting, and unsupported by technology.",
    solution:
      "An AI companion that monitors, supports, and alerts — for the person and their carer.",
    status: "live",
    size: "featured",
    screengrab: "/images/susan-preview.png",
    accent: "#4A8070",
  },
  {
    id: "davanity",
    name: "Davanity",
    url: "https://dav.mnemolabs.app",
    subdomain: "dav.mnemolabs.app",
    studio: "Mnemo",
    tag: "Health AI",
    problem: "Health apps show you data. None of them tell you what it means.",
    solution:
      "Ambient health tracking that interprets your wearable signals, not just records them.",
    status: "live",
    size: "half",
    screengrab: "/images/davanity-preview.png",
    accent: "#6A5080",
  },
  {
    id: "pond-hopping",
    name: "Pond Hopping",
    url: "https://pond.eend.app",
    subdomain: "pond.eend.app",
    studio: "eend",
    tag: "Travel AI",
    problem:
      "Travel planning is still mostly manual. It should know where you've been.",
    solution:
      "AI travel planning with memory. Tracks your hops, plans your next one.",
    status: "live",
    size: "half",
    screengrab: "/images/pond-preview.png",
    accent: "#4A6880",
  },
  {
    id: "moritzwith",
    name: "Moritzwith",
    url: "https://smith.eend.app",
    subdomain: "smith.eend.app",
    studio: "eend",
    tag: "Finance AI",
    problem:
      "Personal finance apps track spending. They don't help you think.",
    solution:
      "An AI finance companion that reasons about your money with you.",
    status: "live",
    size: "third",
    screengrab: "/images/smith-preview.png",
    accent: "#806A4A",
  },
  {
    id: "nous",
    name: "Nous",
    url: "https://nous.eend.app",
    subdomain: "nous.eend.app",
    studio: "eend",
    tag: "Trading AI",
    problem: "Market signal is everywhere. Clarity is rare.",
    solution: "AI-powered market prediction and trading signal aggregation.",
    status: "building",
    size: "third",
    screengrab: null,
    accent: "#507840",
  },
];
