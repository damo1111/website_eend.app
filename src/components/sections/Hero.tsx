"use client";

import { motion } from "framer-motion";
import { DuckMarkLarge } from "@/components/ui/DuckMark";
import { PondCanvas } from "@/components/ui/PondCanvas";

const EASE = [0.25, 0.1, 0.25, 1.0] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 md:px-8"
    >
      {/* Interactive pond — ripples react to cursor + click */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <PondCanvas />
      </div>
      {/* Legibility vignette: darkens toward the left where the copy sits */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 45%, rgba(12,20,16,0.92) 0%, rgba(12,20,16,0.72) 40%, rgba(12,20,16,0.35) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Duck mark — floats gently */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-8"
        >
          <DuckMarkLarge size={120} className="animate-float" />
        </motion.div>

        {/* Studio name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="font-display text-[44px] font-bold leading-none text-text md:text-7xl"
        >
          eend.
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.5)}
          className="mt-4 font-body text-xl italic text-muted"
        >
          An indie AI product studio.
        </motion.p>

        {/* Manifesto */}
        <motion.p
          {...fadeUp(0.7)}
          className="mt-6 max-w-[480px] font-body text-base leading-[1.7] text-muted"
        >
          Five apps. Five problems that bothered me.
          <br />
          Built alone, in Claude Code, shipping on Vercel.
          <br />
          eend is Dutch for duck.
        </motion.p>

        {/* Links */}
        <motion.div
          {...fadeUp(0.9)}
          className="mt-8 flex flex-wrap items-center gap-8 font-mono text-xs text-duck"
        >
          <a href="#apps" className="transition-opacity hover:opacity-70">
            See the apps ↓
          </a>
          <a
            href="mailto:david@moritznet.com"
            className="transition-opacity hover:opacity-70"
          >
            david@moritznet.com
          </a>
        </motion.div>
      </div>

      {/* Corner locator */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
        className="absolute bottom-6 right-6 z-10 font-mono text-[10px] text-muted"
      >
        Melbourne · 2026
      </motion.span>
    </section>
  );
}
