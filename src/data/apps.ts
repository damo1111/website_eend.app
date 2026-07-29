export type AppStatus = "live" | "building";

export interface App {
  id: string;
  name: string;
  subdomain: string;
  studio: "eend";
  tag: string;
  problem: string;
  solution: string;
  status: AppStatus;
  video: string | null;
  poster: string | null;
  /** Native pixel size of the recording. */
  nativeW: number;
  nativeH: number;
  /**
   * Pixels to clip off the top of the recording, in native pixels — the phone
   * status bar, Android screen-recording indicator, and browser URL bar.
   * Clipped at 1:1 scale, so the app itself is never magnified.
   */
  cropTop: number;
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
    video: "/videos/pond-flow.webm",
    poster: "/images/apps/pond-poster.png",
    nativeW: 300,
    nativeH: 666,
    cropTop: 32,
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
    video: "/videos/duckworth-flow.webm",
    poster: "/images/apps/duckworth-poster.png",
    nativeW: 300,
    nativeH: 666,
    cropTop: 88,
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
    video: "/videos/nous-flow.webm",
    poster: "/images/apps/nous-poster.png",
    nativeW: 380,
    nativeH: 620,
    cropTop: 0,
    accent: "#507840",
  },
];
