import Link from "next/link";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/sections/Footer";
import { DuckMarkLarge } from "@/components/ui/DuckMark";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Nav noHero />
      <div className="flex flex-1 flex-col items-center justify-center px-5 py-32 text-center">
        <DuckMarkLarge size={72} colour="#8FB8B1" />
        <h1 className="mt-8 font-display text-4xl font-extrabold tracking-[-0.03em] text-ink md:text-5xl">
          Wandered off.
        </h1>
        <p className="mt-4 max-w-sm font-body text-lg text-ink-muted">
          This page doesn&rsquo;t exist. The duck&rsquo;s still on the pond
          though.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded border border-page-border px-6 py-3 font-mono text-[13px] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          Back to eend.app
        </Link>
      </div>
      <Footer />
    </main>
  );
}
