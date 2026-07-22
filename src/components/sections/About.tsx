"use client";

import { motion } from "framer-motion";
import { DuckMarkLarge } from "@/components/ui/DuckMark";

const EASE = [0.25, 0.1, 0.25, 1.0] as const;

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-12 md:grid-cols-[auto_1fr] md:gap-16">
        {/* Decorative duck mark */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex justify-center md:justify-start"
        >
          <DuckMarkLarge size={96} colour="#6B8070" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="text-center md:text-left"
        >
          <p className="font-mono text-[10px] tracking-[0.2em] text-duck">
            THE BUILDER
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] text-text md:text-[44px]">
            One person.
            <br />
            Twenty years.
            <br />
            Five apps and counting.
          </h2>

          <div className="mx-auto mt-6 max-w-[560px] space-y-4 font-body text-base leading-[1.8] text-muted md:mx-0">
            <p>
              I&apos;m David Moritz — a senior product leader who spent 20 years
              shipping at scale across JET, IAG Loyalty, REA Group, Zoopla,
              Tesco, and Amazon.
            </p>
            <p>
              eend.app is where I build for myself. AI-first apps, real
              problems, no committee. Built in Claude Code and deployed on
              Vercel.
            </p>
            <p>
              Alongside eend, I run Mnemo — an ambient AI startup — and NOT THAT
              CVNVRD, a directional fashion label. The duck connects them all.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 md:items-start">
            <a
              href="https://davidmoritz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-duck transition-opacity hover:opacity-70"
            >
              → Full story at davidmoritz.com
            </a>
            <a
              href="https://mnemo.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted transition-colors hover:text-duck"
            >
              → Mnemo at mnemo.systems
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
