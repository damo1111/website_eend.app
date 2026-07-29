import { apps, type App } from "@/data/apps";
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
 * The recording, with only its top chrome clipped away — phone status bar,
 * Android screen-recording indicator, browser URL bar. The video renders at
 * its natural scale for the frame width (no magnification): the window is
 * sized to the *cropped* aspect ratio and the video is shifted up by exactly
 * the crop, as a percentage of its own height, so nothing is lost off the
 * bottom and the app's own tab bar stays in view.
 */
function Screen({ app }: { app: App }) {
  const shift = (app.cropTop / app.nativeH) * 100;

  return (
    <div
      className="relative w-[96px] overflow-hidden md:w-[150px]"
      style={{ aspectRatio: `${app.nativeW} / ${app.nativeH - app.cropTop}` }}
    >
      {app.video ? (
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
          className="block h-auto w-full"
          style={{ transform: `translateY(-${shift.toFixed(3)}%)` }}
        />
      ) : (
        <div className="h-full w-full bg-surface" />
      )}
    </div>
  );
}

/**
 * The signature element: the three apps running, staggered on a diagonal and
 * bobbing out of phase — a small flotilla. Leads the page with the product
 * itself rather than a logo.
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
                <Screen app={app} />
              </PhoneFrame>
            </div>
          </div>
        );
      })}
    </div>
  );
}
