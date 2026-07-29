"use client";

import { motion } from "framer-motion";
import { DuckMarkLarge } from "@/components/ui/DuckMark";
import { Spotlight } from "@/components/ui/Spotlight";
import { Marquee } from "@/components/ui/Marquee";

const MARQUEE_TEXT =
  "Ministry of Susan — Eldercare AI · Davanity — Health AI · Pond Hopping — Travel AI · Moritzwith — Finance AI · Nous — Trading AI · eend is Dutch for duck · ";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden"
    >
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-40" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-5xl px-5 py-32 md:px-8"
      >
        <motion.div variants={item} className="mb-8">
          <DuckMarkLarge size={120} className="animate-float" />
        </motion.div>

        <motion.p
          variants={item}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-duck"
        >
          Indie AI product studio · Melbourne
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-[64px] font-bold leading-[0.9] text-text md:text-[104px]"
        >
          eend.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-[480px] font-body text-lg leading-[1.7] text-muted"
        >
          Five apps. Five problems that bothered me. AI-first, built alone,
          shipped fast. <span className="text-text">eend</span> is Dutch for
          duck.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-6"
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
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-0 z-10 w-full">
        <Marquee text={MARQUEE_TEXT} />
      </div>
    </section>
  );
}
