interface DuckMarkProps {
  size?: number;
  colour?: string;
  className?: string;
}

/**
 * The eend mark — a duck floating in side profile, facing right.
 * Full body: rounded hull, raised head, chunky bill, small tail flick.
 * Drawn as overlapping solid shapes that read as one silhouette, legible
 * from 24px up.
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
      <ellipse cx="27" cy="40" rx="20" ry="10.5" fill={colour} />
      <circle cx="40" cy="26" r="11" fill={colour} />
      <path
        d="M48 22.6 L61 24.2 C62 24.3 62 27.6 61 27.7 L48 29.3 Z"
        fill={colour}
      />
      <path d="M13 33 L5.5 24.5 L16.5 28.5 Z" fill={colour} />
      <circle cx="44" cy="23.4" r="2.1" fill="#0C1410" />
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
