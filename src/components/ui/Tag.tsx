import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-duck-dim px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-duck",
        className,
      )}
    >
      {children}
    </span>
  );
}
