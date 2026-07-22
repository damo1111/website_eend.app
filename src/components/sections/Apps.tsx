"use client";

import { motion } from "framer-motion";
import { apps } from "@/data/apps";
import AppCard from "@/components/ui/AppCard";

const EASE = [0.25, 0.1, 0.25, 1.0] as const;

export function Apps() {
  return (
    <section id="apps" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-mono text-[10px] tracking-[0.2em] text-duck"
        >
          THE APPS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-4 font-display text-4xl font-bold leading-[1.05] text-text md:text-[52px]"
        >
          Five problems.
          <br />
          Five apps.
          <br />
          All AI.
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {apps.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className={app.size === "featured" ? "md:col-span-2" : ""}
            >
              <AppCard app={app} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
