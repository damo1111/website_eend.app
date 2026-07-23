"use client";

import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  life: number; // 0 → 1
  speed: number;
  weight: number;
  hue: [number, number, number]; // rgb
}

const DUCK: [number, number, number] = [126, 191, 184];
const MOSS: [number, number, number] = [74, 107, 80];
const GOLD: [number, number, number] = [212, 180, 131];

/**
 * An interactive pond. Ambient raindrop ripples animate continuously; moving
 * the cursor trails ripples across the water, and a click drops a splash of
 * concentric rings. Purely decorative — sits behind the hero content and
 * respects prefers-reduced-motion.
 */
export function PondCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    const ripples: Ripple[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const pick = (): [number, number, number] => {
      const r = Math.random();
      if (r > 0.82) return GOLD;
      if (r > 0.5) return MOSS;
      return DUCK;
    };

    const spawn = (
      x: number,
      y: number,
      opts: Partial<Ripple> = {},
    ) => {
      ripples.push({
        x,
        y,
        radius: opts.radius ?? 0,
        maxRadius: opts.maxRadius ?? 60 + Math.random() * 90,
        life: 0,
        speed: opts.speed ?? 0.006 + Math.random() * 0.006,
        weight: opts.weight ?? 1,
        hue: opts.hue ?? pick(),
      });
      // Cap the pool so long sessions stay light.
      if (ripples.length > 90) ripples.splice(0, ripples.length - 90);
    };

    const splash = (x: number, y: number) => {
      spawn(x, y, { maxRadius: 150, speed: 0.009, weight: 1.6 });
      spawn(x, y, { maxRadius: 95, speed: 0.011, weight: 1.1, radius: -14 });
      spawn(x, y, { maxRadius: 55, speed: 0.014, weight: 0.8, radius: -28 });
    };

    // Ambient rainfall
    let ambientTimer = 0;
    const ambientEvery = () => 420 + Math.random() * 900;
    let nextAmbient = ambientEvery();

    // Cursor trail throttle
    let lastTrail = 0;
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const now = performance.now();
      if (now - lastTrail < 85) return;
      lastTrail = now;
      spawn(e.clientX - rect.left, e.clientY - rect.top, {
        maxRadius: 42 + Math.random() * 40,
        speed: 0.01,
        weight: 0.7,
      });
    };
    const onDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      splash(e.clientX - rect.left, e.clientY - rect.top);
    };

    let raf = 0;
    let last = performance.now();

    const frame = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;

      ctx.clearRect(0, 0, width, height);

      if (!reduced) {
        ambientTimer += dt;
        if (ambientTimer >= nextAmbient) {
          ambientTimer = 0;
          nextAmbient = ambientEvery();
          spawn(Math.random() * width, Math.random() * height);
        }
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.life += r.speed * (dt / 16.67);
        if (r.life >= 1) {
          ripples.splice(i, 1);
          continue;
        }
        r.radius = r.life * r.maxRadius;
        if (r.radius <= 0) continue;

        // Fade in fast, out slow — like a real ring settling.
        const fade = Math.sin(r.life * Math.PI);
        const alpha = fade * 0.5 * r.weight;
        const [rr, gg, bb] = r.hue;

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rr}, ${gg}, ${bb}, ${alpha})`;
        ctx.lineWidth = 1.1 * r.weight;
        ctx.stroke();

        // A faint inner echo gives the ring depth.
        if (r.radius > 12) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius * 0.62, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${rr}, ${gg}, ${bb}, ${alpha * 0.28})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    // Seed a few so it isn't empty on first paint.
    for (let i = 0; i < 5; i++) {
      spawn(Math.random() * width, Math.random() * height, {
        radius: Math.random() * 40,
      });
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
