"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DuckMark } from "./DuckMark";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Apps", href: "/#apps" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Nav({ noHero = false }: { noHero?: boolean }) {
  /**
   * The hero is a dark band and the rest of the page is light, so the nav has
   * to invert once it leaves the hero — light-on-dark above, dark-on-light
   * below. Switch when the hero's bottom edge reaches the nav, not at a fixed
   * scroll offset, so the bar never sits half-over the boundary.
   *
   * Pages with no dark hero (e.g. 404) pass noHero — the bar stays in its
   * light-on-light state throughout, rather than assuming a dark band that
   * doesn't exist and rendering light-coloured text on the page bg.
   */
  const [pastHero, setPastHero] = useState(noHero);

  useEffect(() => {
    if (noHero) return;
    const onScroll = () => {
      const hero = document.getElementById("top");
      const height = hero?.offsetHeight ?? 640;
      setPastHero(window.scrollY > height - 56);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [noHero]);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between px-5 transition-colors duration-300 md:px-8",
        pastHero
          ? "border-b border-page-border bg-page/[.92] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Link
        href="/#top"
        className={cn(
          "flex items-center gap-2 font-mono text-[13px] tracking-[0.1em] transition-colors duration-300",
          pastHero ? "text-accent" : "text-duck",
        )}
      >
        <DuckMark size={24} colour={pastHero ? "#2E7D74" : "#7EBFB8"} />
        eend
      </Link>

      <div className="flex items-center gap-6">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "font-mono text-[11px] transition-colors duration-300",
              pastHero
                ? "text-ink-muted hover:text-accent"
                : "text-muted hover:text-duck",
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
