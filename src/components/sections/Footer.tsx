const RIGHT_LINKS = [
  { label: "mnemo.systems", href: "https://mnemo.systems" },
  { label: "davidmoritz.com", href: "https://davidmoritz.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davidmoritz" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-6 md:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-[10px] text-muted">
          © 2026 eend · eend is Dutch for duck 🦆
        </p>
        <div className="flex items-center gap-5">
          {RIGHT_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-muted transition-colors hover:text-duck"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
