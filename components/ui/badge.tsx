import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
type BadgeVariant = "blue" | "red" | "green";
const variants: Record<BadgeVariant, string> = {
  blue: "badge-blue",
  red: "badge-red",
  green: "badge-green",
};
export function Badge({
  variant = "blue",
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
