import { DuckMarkLarge } from "@/components/ui/DuckMark";

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-[auto_1fr] md:gap-20">
        <div className="reveal reveal-on-scroll flex justify-center md:justify-start">
          <DuckMarkLarge size={96} colour="#3D7870" />
        </div>

        <div className="reveal reveal-on-scroll text-center md:text-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-duck">
            The studio
          </p>

          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-text md:text-[44px]">
            One studio.
            <br />
            Three apps.
            <br />
            No committee.
          </h2>

          <div className="mx-auto mt-6 max-w-[560px] space-y-4 font-body text-base leading-[1.8] text-muted md:mx-0">
            <p>
              eend is an independent AI product studio in Melbourne, building
              AI-first software for problems worth solving.
            </p>
            <p>
              The focus is AI that reasons rather than records — apps that
              understand context, not just store it. Everything is designed,
              built and shipped in-house, on its own timeline.
            </p>
            <p>
              <span className="text-text">eend</span> is Dutch for duck.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
