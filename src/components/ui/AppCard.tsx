"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { App } from "@/data/apps";
import { Tag } from "./Tag";
import { cn } from "@/lib/utils";

const SIZE_CLASSES: Record<App["size"], string> = {
  featured: "md:col-span-2 min-h-[400px]",
  half: "md:col-span-1 min-h-[320px]",
  third: "md:col-span-1 min-h-[280px]",
};

function StatusDot({ status }: { status: App["status"] }) {
  const live = status === "live";
  return (
    <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
      <span
        className={cn(
          "inline-block h-1.5 w-1.5 rounded-full",
          live ? "animate-pulse-dot bg-[#4CCFB4]" : "bg-gold",
        )}
      />
      {live ? "Live" : "Building"}
    </span>
  );
}

export default function AppCard({ app }: { app: App }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  const hasImage = Boolean(app.screengrab);

  // Normalised cursor position within the card (0–1 on each axis).
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const springCfg = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), springCfg);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), springCfg);

  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);
  const glow = useMotionTemplate`radial-gradient(240px circle at ${glowX} ${glowY}, ${app.accent}40, transparent 68%)`;

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
    setHovered(false);
  };

  return (
    <motion.a
      ref={ref}
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        ...(hasImage
          ? {
              backgroundImage: `url(${app.screengrab})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {
              backgroundImage: `linear-gradient(160deg, ${app.accent}22 0%, #121C15 65%)`,
            }),
      }}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded border border-border bg-surface p-5 transition-colors duration-300 will-change-transform hover:border-border-light",
        SIZE_CLASSES[app.size],
      )}
    >
      {/* Legibility gradient over screengrabs */}
      {hasImage && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(12,20,16,0.92) 0%, rgba(12,20,16,0.55) 45%, rgba(12,20,16,0.15) 100%)",
          }}
        />
      )}

      {/* Accent glow that tracks the cursor */}
      <motion.div
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Mnemo attribution */}
      {app.studio === "Mnemo" && (
        <span className="absolute right-4 top-4 z-10 font-mono text-[9px] text-muted">
          Mnemo
        </span>
      )}

      {/* Tag pill — top left */}
      <div className="absolute left-5 top-5 z-10">
        <Tag>{app.tag}</Tag>
      </div>

      {/* Always-visible content */}
      <div className="relative z-10">
        <h3 className="font-display text-2xl font-semibold leading-tight text-text">
          {app.name}
        </h3>
        <div className="mt-1.5">
          <StatusDot status={app.status} />
        </div>
      </div>

      {/* Hover overlay — slides up from the bottom */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "40%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="absolute inset-x-0 bottom-0 z-20 h-full bg-bg/[.95] px-5 pt-6 backdrop-blur-sm"
          >
            <p className="font-body text-[13px] italic leading-relaxed text-muted">
              {app.problem}
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-text">
              {app.solution}
            </p>
            <span className="mt-4 inline-block font-mono text-xs text-duck">
              Visit app →
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
