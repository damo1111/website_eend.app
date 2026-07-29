"use client";

import { motion } from "framer-motion";
import { apps } from "@/data/apps";
import AppCard from "@/components/ui/AppCard";
import { cn } from "@/lib/utils";

const headlineLines = ["Five problems.", "Five apps.", "All AI."];

// Map each app id to its span in the asymmetric bento grid (6 columns).
const spanClasses: Record<string, string> = {
  "ministry-of-susan": "md:col-span-6", // featured — full width
  davanity: "md:col-span-3", // half
  "pond-hopping": "md:col-span-3", // half
  moritzwith: "md:col-span-3", // half
  nous: "md:col-span-3", // half
};

export function Apps() {
  return (
    <section id="apps" className="mx-auto w-full max-w-5xl px-5 py-24 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-duck">
        The Apps
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-text md:text-[56px]">
        {headlineLines.map((line, i) => (
          <motion.span
            key={line}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-6">
        {apps.map((app) => (
          <div key={app.id} className={cn(spanClasses[app.id])}>
            <AppCard app={app} />
          </div>
        ))}
      </div>
    </section>
  );
}
