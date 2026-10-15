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
        "inline-flex min-h-[43px] items-center justify-center gap-2 rounded-full border px-7 py-2.5 text-base font-semibold",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
