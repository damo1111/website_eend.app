import { apps, type App } from "@/data/apps";

function AppRow({ app }: { app: App }) {
  return (
    <article className="reveal reveal-on-scroll group relative grid grid-cols-1 gap-4 border-t border-page-border py-7 md:grid-cols-12 md:gap-8 md:py-9">
      {/* Rule in the app's own colour, drawn on hover */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-px w-0 transition-[width] duration-700 ease-out group-hover:w-full"
        style={{ background: app.accent }}
      />

      <div className="md:col-span-4">
        <p
          className="font-mono text-[10px] uppercase tracking-[0.18em]"
          style={{ color: app.accent }}
        >
          {app.tag}
        </p>
        <h3 className="mt-2 font-display text-[30px] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[38px]">
          {app.name}
        </h3>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-gold-ink">
          Private beta
        </p>
      </div>

      <div className="md:col-span-7 md:col-start-6">
        <p className="font-body text-[15px] italic leading-relaxed text-ink-muted">
          {app.problem}
        </p>
        <p className="mt-3 font-body text-lg leading-relaxed text-ink">
          {app.solution}
        </p>
        <ul className="mt-4 space-y-1.5">
          {app.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-baseline gap-2 font-body text-[14px] text-ink-muted"
            >
              <span
                aria-hidden
                className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full"
                style={{ background: app.accent }}
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Apps() {
  return (
    <section id="apps" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <p className="reveal reveal-on-scroll font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          The apps
        </p>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink md:text-[56px]">
          <span className="reveal reveal-on-scroll block">Three problems.</span>
          <span className="reveal reveal-on-scroll block">Three apps.</span>
          <span className="reveal reveal-on-scroll block">All AI.</span>
        </h2>

        <div className="mt-10 border-b border-page-border">
          {apps.map((app) => (
            <AppRow key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
