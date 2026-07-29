export type AppStatus = "live" | "building";
export type AppSize = "featured" | "half" | "third";

export interface App {
  id: string;
  name: string;
  subdomain: string;
  studio: "eend";
  tag: string;
  problem: string;
  solution: string;
  status: AppStatus;
  size: AppSize;
  screengrab: string | null;
  accent: string;
}

// The three eend apps. (Ministry of Susan and Davanity are Mnemo products and
// live at mnemolabs.co — they are not part of the eend studio.)
export const apps: App[] = [
  {
    id: "pond-hopping",
    name: "Pond Hopping",
    subdomain: "pond.eend.app",
    studio: "eend",
    tag: "Travel AI",
    problem:
      "Travel planning is still mostly manual. It should know where you've been.",
    solution:
      "AI travel planning with memory. Tracks your hops, plans your next one.",
    status: "live",
    size: "third",
    screengrab: null,
    accent: "#4A6880",
  },
  {
    id: "duckworth",
    name: "DuckWorth",
    subdomain: "duckworth.eend.app",
    studio: "eend",
    tag: "Finance AI",
    problem:
      "Personal finance apps track spending. They don't help you think.",
    solution:
      "An AI finance companion that reasons about your money with you.",
    status: "building",
    size: "third",
    screengrab: null,
    accent: "#806A4A",
  },
  {
    id: "nous",
    name: "Nous",
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
