interface DuckMarkProps {
  size?: number;
  colour?: string;
  className?: string;
}

/**
 * The eend mark — a duck floating in side profile, facing right.
 * One unbroken body mass with the head overlapping it (no concave notch at
 * the chest), a short broad bill, and a single eye. Built to stay legible
 * down to 16px, so the same drawing serves the nav and the favicon.
 */
export function DuckMark({
  size = 48,
  colour = "#7EBFB8",
  className,
}: DuckMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="eend duck mark"
    >
      <path
        d="M45 31C45 42.5 37 48 25 48C11.5 48 3.5 42.5 3.5 36C3.5 30.5 9 26.5 16.5 25.5C24 24.5 32 25.5 38 27.5C41.5 28.5 45 29 45 31Z"
        fill={colour}
      />
      <circle cx="43" cy="19.5" r="11" fill={colour} />
      <path
        d="M51.5 15.5L61.5 17C62.8 17.2 62.8 22.8 61.5 23L51.5 24.5Z"
        fill={colour}
      />
      <circle cx="45.5" cy="16" r="2.3" fill="#0C1410" />
    </svg>
  );
}

/** Larger variant of the duck mark for the About panel and feature contexts. */
export function DuckMarkLarge({
  size = 96,
  colour = "#7EBFB8",
  className,
}: DuckMarkProps) {
  return <DuckMark size={size} colour={colour} className={className} />;
}
