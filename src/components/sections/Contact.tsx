export function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-8 md:py-32">
      <div className="reveal reveal-on-scroll mx-auto w-full max-w-5xl">
        <h2 className="font-display text-4xl font-bold leading-tight text-text md:text-[52px]">
          Say hello.
        </h2>

        <p className="mt-4 font-body text-base text-muted">
          Feedback on the apps, collaboration, or just a good idea.
        </p>

        <a
          href="mailto:david@moritznet.com"
          className="group mt-6 inline-block font-mono text-sm text-duck"
        >
          <span className="bg-gradient-to-r from-duck to-duck bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
            david@moritznet.com
          </span>
        </a>

        <p className="mt-8 font-mono text-[10px] text-muted">
          Melbourne · GMT+10
        </p>
      </div>
    </section>
  );
}
