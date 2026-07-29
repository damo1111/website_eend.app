export function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-8 md:py-32">
      <div className="reveal reveal-on-scroll mx-auto w-full max-w-6xl">
        <h2 className="font-display text-4xl font-extrabold leading-tight tracking-[-0.03em] text-text md:text-[52px]">
          Get in touch.
        </h2>

        <p className="mt-4 font-body text-lg text-muted">
          Beta access, feedback, or a good idea.
        </p>

        <a
          href="mailto:info@eend.app"
          className="group mt-6 inline-block font-mono text-base text-duck"
        >
          <span className="bg-gradient-to-r from-duck to-duck bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
            info@eend.app
          </span>
        </a>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          Melbourne · GMT+10
        </p>
      </div>
    </section>
  );
}
