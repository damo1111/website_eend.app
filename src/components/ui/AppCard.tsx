"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { App } from "@/data/apps";
import { Tag } from "./Tag";
import { cn } from "@/lib/utils";

const MIN_HEIGHT: Record<App["size"], string> = {
  featured: "min-h-[400px]",
  half: "min-h-[340px]",
  third: "min-h-[300px]",
};

export default function AppCard({ app }: { app: App }) {
  const { name, studio, tag, problem, solution, screengrab, accent, size } =
    app;

  // Fall back to the accent gradient if a screengrab is absent or fails to load.
  const [imageOk, setImageOk] = useState(Boolean(screengrab));
  const showImage = Boolean(screengrab) && imageOk;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <div
        className={cn(
          "relative flex h-full flex-col justify-end overflow-hidden rounded border border-border bg-surface p-7",
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-duck-dim",
          MIN_HEIGHT[size],
        )}
      >
        {/* Background: screengrab if present, else accent gradient */}
        {showImage && screengrab ? (
          <>
            <Image
              src={screengrab}
              alt={`${name} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-60"
              onError={() => setImageOk(false)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/30" />
          </>
        ) : (
          <div
            className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-50"
            style={{
              background: `radial-gradient(120% 120% at 20% 0%, ${accent}66, transparent 60%)`,
            }}
          />
        )}

        {/* Studio, top-left */}
        <div className="absolute left-6 top-6 z-10 flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-gold" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {studio}
          </span>
        </div>

        {/* Private beta — top-right */}
        <span className="absolute right-6 top-6 z-10 rounded-full border border-gold/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-gold">
          Private beta
        </span>

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-3">
            <Tag>{tag}</Tag>
          </div>
          <h3 className="font-display text-2xl font-semibold leading-tight text-text">
            {name}
          </h3>

          {/* Problem + solution reveal on hover */}
          <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-h-48 group-hover:opacity-100">
            <p className="mt-3 font-body text-[13px] italic leading-relaxed text-muted">
              {problem}
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-text">
              {solution}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
