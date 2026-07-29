interface DuckMarkProps {
  size?: number;
  colour?: string;
  className?: string;
}

const DUCK_PATH =
  "M6 33 C5 27 10 26 14 28 C22 21 33 15 44 17 C46 11 55 10 58 16 C60 20 57 24 52 24 L62 24.5 L61 27 L52 27.5 C51 32 47 35 43 35 C46 41 40 44 29 44 C17 44 8 41 6 36 Z";

/**
 * The eend mark — a minimal duck floating in side profile, facing right.
 * A single confident silhouette: plump body, rounded head, small bill, one
 * eye. Clean and legible from 24px up.
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
      <path d={DUCK_PATH} fill={colour} />
      <circle cx="51" cy="19.5" r="1.9" fill="#0C1410" />
    </svg>
  );
}

/** Larger variant of the duck mark for the hero and feature contexts. */
export function DuckMarkLarge({
  size = 96,
  colour = "#7EBFB8",
  className,
}: DuckMarkProps) {
  return <DuckMark size={size} colour={colour} className={className} />;
}
