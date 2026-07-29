import { apps } from "@/data/apps";
import { cn } from "@/lib/utils";

/** Fixed dark phone chassis — a device, not a themed surface. */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[1.5rem] border-[5px] border-black bg-black p-[3px] shadow-[0_30px_60px_-18px_rgba(0,0,0,0.9)]">
      <div className="overflow-hidden rounded-[1.25rem]">{children}</div>
    </div>
  );
}

/**
 * The signature element: the three apps running, staggered on a diagonal and
 * bobbing out of phase — a small flotilla. Leads the page with the product
 * itself rather than a logo, and carries the duck idea structurally.
 */
const LAYOUT = [
  { offset: 0, rotate: -7, z: 10, delay: "0s" },
  { offset: 26, rotate: 3, z: 30, delay: "1.1s" },
  { offset: -12, rotate: -3, z: 20, delay: "2.2s" },
];

export function PhoneFlotilla() {
  return (
    <div className="flex items-center justify-center md:justify-end">
      {apps.map((app, i) => {
        const l = LAYOUT[i % LAYOUT.length];
        return (
          <div
            key={app.id}
            className={cn("relative shrink-0", i > 0 && "-ml-7 md:-ml-12")}
            style={{
              zIndex: l.z,
              transform: `translateY(${l.offset}px) rotate(${l.rotate}deg)`,
            }}
          >
            <div className="animate-bob" style={{ animationDelay: l.delay }}>
              <PhoneFrame>
                {app.video ? (
                  // Scaled and bottom-anchored so the recording's browser URL
                  // bar is cropped out — reads as a native app.
                  // eslint-disable-next-line jsx-a11y/media-has-caption
                  <video
                    src={app.video}
                    poster={app.poster ?? undefined}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={`${app.name} preview`}
                    className="h-[186px] w-[96px] origin-bottom scale-[1.14] object-cover object-bottom md:h-[292px] md:w-[150px]"
                  />
                ) : (
                  <div className="h-[186px] w-[96px] bg-surface md:h-[292px] md:w-[150px]" />
                )}
              </PhoneFrame>
            </div>
          </div>
        );
      })}
    </div>
  );
}
