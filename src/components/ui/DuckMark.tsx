interface DuckMarkProps {
  size?: number;
  colour?: string;
  className?: string;
}

/**
 * Minimal geometric duck logo mark — side profile facing right.
 * Body: horizontal oval. Head: circle overlapping top-right of body.
 * Beak: right-pointing triangle. Tail: upward flick at the left.
 * Eye: small darker dot. No strokes, all filled.
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
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="eend duck mark"
    >
      {/* Tail — upward flick at the leftmost point of the body */}
      <path d="M11 30 L4 22 L13 26 Z" fill={colour} />
      {/* Body — horizontal oval */}
      <ellipse cx="23" cy="31" rx="15" ry="9" fill={colour} />
      {/* Head — smaller circle overlapping top-right of the body */}
      <circle cx="34" cy="18" r="8" fill={colour} />
      {/* Beak — right-pointing triangle at the rightmost point of the head */}
      <path d="M41 15 L47 18 L41 21 Z" fill={colour} />
      {/* Eye — tiny darker dot */}
      <circle cx="36" cy="16" r="1.4" fill="#0C1410" />
    </svg>
  );
}

/** Larger hero variant of the duck mark. */
export function DuckMarkLarge({
  size = 96,
  colour = "#7EBFB8",
  className,
}: DuckMarkProps) {
  return <DuckMark size={size} colour={colour} className={className} />;
}
