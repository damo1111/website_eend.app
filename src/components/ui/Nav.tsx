"use client";

import { useEffect, useState } from "react";
import { DuckMark } from "./DuckMark";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Apps", href: "#apps" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between px-5 transition-colors duration-300 md:px-8",
        scrolled ? "bg-bg/[.92] backdrop-blur-md" : "bg-transparent",
      )}
    >
      <a
        href="#top"
        className="flex items-center gap-2 font-mono text-[13px] tracking-[0.1em] text-duck"
      >
        <DuckMark size={24} />
        eend
      </a>

      <div className="flex items-center gap-6">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-[11px] text-muted transition-colors hover:text-duck"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
