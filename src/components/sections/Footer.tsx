const links = [
  { label: "mnemolabs.co", href: "https://mnemolabs.co" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/damoritz" },
];

export function Footer() {
  return (
    <footer className="border-t border-page-border py-7">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 md:px-8 items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
          © 2026 eend · Melbourne
        </p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
