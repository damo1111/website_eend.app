import type { App } from "@/data/apps";
import { Tag } from "./Tag";

/** Fixed dark phone chassis, independent of the site theme. */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[1.4rem] border-[5px] border-black bg-black p-1 shadow-[0_24px_50px_-15px_rgba(0,0,0,0.7)]">
      <div className="overflow-hidden rounded-[1.1rem]">{children}</div>
    </div>
  );
}

export default function AppCard({
  app,
  index = 0,
}: {
  app: App;
  index?: number;
}) {
  const { name, studio, tag, solution, status, video, poster, accent } = app;
  const live = status === "live";

  return (
    <div className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded border border-border bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-duck-dim">
      {/* Accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-300 group-hover:opacity-80"
        style={{
          background: `radial-gradient(120% 80% at 50% 0%, ${accent}3d, transparent 62%)`,
        }}
      />

      {/* Top row: studio + private-beta */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              live ? "animate-pulse-dot bg-[#4CCFB4]" : "bg-gold"
            }`}
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {studio}
          </span>
        </div>
        <span className="rounded-full border border-gold/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-gold">
          Private beta
        </span>
      </div>

      {/* Live app footage in a floating phone */}
      <div className="relative z-10 flex flex-1 items-center justify-center py-6">
        <div
          className="animate-bob"
          style={{ animationDelay: `${index * 0.6}s` }}
        >
          <PhoneFrame>
            {video ? (
              // Enlarge + bottom-anchor the recording so the browser URL/status
              // bar at the top is cropped out — reads as a native app, with the
              // app's own bottom tab bar kept in frame.
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video
                src={video}
                poster={poster ?? undefined}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label={`${name} app preview`}
                className="h-[236px] w-[122px] origin-bottom scale-[1.14] object-cover object-bottom"
              />
            ) : (
              <div className="h-[236px] w-[122px] bg-surface" />
            )}
          </PhoneFrame>
        </div>
      </div>

      {/* Bottom: tag, name, one-line pitch */}
      <div className="relative z-10">
        <div className="mb-3">
          <Tag>{tag}</Tag>
        </div>
        <h3 className="font-display text-2xl font-semibold leading-tight text-text">
          {name}
        </h3>
        <p className="mt-2 font-body text-[13px] leading-relaxed text-muted">
          {solution}
        </p>
      </div>
    </div>
  );
}
