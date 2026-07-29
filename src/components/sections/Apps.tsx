import { apps } from "@/data/apps";
import AppCard from "@/components/ui/AppCard";
import { DuckMark } from "@/components/ui/DuckMark";

const headlineLines = ["Three problems.", "Three apps.", "All AI."];

export function Apps() {
  return (
    <section id="apps" className="mx-auto w-full max-w-5xl px-5 py-24 md:px-8">
      <div className="reveal reveal-on-scroll flex items-center gap-3">
        {/* A little flock of three — one per app */}
        <span className="flex items-center gap-0.5" aria-hidden="true">
          <DuckMark size={13} colour="#3D7870" />
          <DuckMark size={13} colour="#3D7870" />
          <DuckMark size={13} colour="#7EBFB8" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-duck">
          The Apps
        </span>
      </div>
      <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-text md:text-[56px]">
        {headlineLines.map((line) => (
          <span key={line} className="reveal reveal-on-scroll block">
            {line}
          </span>
        ))}
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {apps.map((app, i) => (
          <div key={app.id} className="reveal reveal-on-scroll">
            <AppCard app={app} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
