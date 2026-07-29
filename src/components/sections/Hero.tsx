import { DuckMarkLarge } from "@/components/ui/DuckMark";
import { Spotlight } from "@/components/ui/Spotlight";
import { Marquee } from "@/components/ui/Marquee";

const MARQUEE_TEXT =
  "Pond Hopping — Travel AI · DuckWorth — Finance AI · Nous — Trading AI · eend is Dutch for duck · ";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden"
    >
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-40" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-32 md:px-8">
        <div className="reveal mb-8" style={{ animationDelay: "0.05s" }}>
          <DuckMarkLarge size={120} className="animate-float" />
        </div>

        <p
          className="reveal font-mono text-[11px] uppercase tracking-[0.2em] text-duck"
          style={{ animationDelay: "0.15s" }}
        >
          Indie AI product studio · Melbourne
        </p>

        <h1
          className="reveal mt-6 font-display text-[64px] font-bold leading-[0.82] text-text md:text-[104px]"
          style={{ animationDelay: "0.25s" }}
        >
          eend<span className="text-duck">.</span>
        </h1>

        {/* Signature: eend as a Dutch dictionary headword */}
        <p
          className="reveal mt-4 font-mono text-[13px] text-muted"
          style={{ animationDelay: "0.33s" }}
        >
          <span className="text-duck">/eːnt/</span>
          <span className="mx-2.5 text-border-light">·</span>
          <span className="italic">noun</span>
          <span className="mx-2.5 text-border-light">·</span>
          Dutch for <span className="text-text">duck</span>
        </p>

        <p
          className="reveal mt-7 max-w-[480px] font-body text-lg leading-[1.7] text-muted"
          style={{ animationDelay: "0.42s" }}
        >
          Three apps. Three problems that bothered me. AI-first, built alone,
          shipped fast.
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center gap-6"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#apps"
            className="group inline-flex items-center gap-2 rounded border border-border px-6 py-3 font-mono text-sm text-text transition-colors duration-300 hover:border-duck hover:text-duck"
          >
            See the apps
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
          <a
            href="mailto:david@moritznet.com"
            className="font-mono text-sm text-muted underline-offset-4 transition-colors duration-300 hover:text-duck hover:underline"
          >
            david@moritznet.com
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 z-10 w-full">
        <Marquee text={MARQUEE_TEXT} />
      </div>
    </section>
  );
}
