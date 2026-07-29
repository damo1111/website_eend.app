export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="reveal mx-auto w-full max-w-6xl px-5 md:px-8">
        <h2 className="font-display text-4xl font-extrabold leading-tight tracking-[-0.03em] text-ink md:text-[52px]">
          Get in touch.
        </h2>

        <p className="mt-4 font-body text-lg text-ink-muted">
          Beta access, feedback, or a good idea.
        </p>

        <a
          href="mailto:info@eend.app"
          className="group mt-6 inline-block font-mono text-base text-accent"
        >
          <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
            info@eend.app
          </span>
        </a>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
          Melbourne · GMT+10
        </p>
      </div>
    </section>
  );
}
