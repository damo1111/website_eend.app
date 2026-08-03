import { Spotlight } from "@/components/ui/Spotlight";
import { PhoneFlotilla } from "@/components/ui/PhoneFlotilla";

export function Hero() {
  return (
    // The one dark band on the page — the rest is light.
    <section
      id="top"
      className="relative w-full overflow-hidden bg-bg text-text"
    >
      <Spotlight className="-top-32 left-1/4 md:-top-24 md:left-1/3" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-28 md:grid-cols-12 md:gap-8 md:px-8 md:pb-24 md:pt-36">
        <div className="md:col-span-5">
          <p className="reveal font-mono text-[11px] uppercase tracking-[0.22em] text-duck">
            Indie AI product studio · Melbourne
          </p>

          <h1
            className="reveal mt-5 font-display text-[64px] font-extrabold leading-[0.85] tracking-[-0.04em] text-text md:text-[88px]"
            style={{ animationDelay: "0.1s" }}
          >
            eend<span className="text-duck">.</span>
          </h1>

          <p
            className="reveal mt-6 max-w-[420px] font-body text-lg leading-[1.6] text-muted"
            style={{ animationDelay: "0.18s" }}
          >
            Three AI apps in private beta. Travel that remembers, money that
            reasons, markets made clear.
          </p>

          <div
            className="reveal mt-9 flex flex-wrap items-center gap-6"
            style={{ animationDelay: "0.26s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center rounded border border-border-light px-6 py-3 font-mono text-[13px] text-text transition-colors duration-300 hover:border-duck hover:text-duck"
            >
              Request access
            </a>
            <a
              href="#apps"
              className="group font-mono text-[13px] text-muted transition-colors duration-300 hover:text-duck"
            >
              See the apps{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>

        <div
          className="reveal md:col-span-7"
          style={{ animationDelay: "0.34s" }}
        >
          <PhoneFlotilla />
        </div>
      </div>
    </section>
  );
}
