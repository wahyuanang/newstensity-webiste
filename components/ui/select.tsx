import { ChevronDown } from "lucide-react";
import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  hint?: string;
};
export function Select({
  label,
  hint,
  id,
  className,
  children,
  ...props
}: SelectProps) {
  const selectId = id ?? props.name;
  return (
    <div className="grid gap-2">
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={cn(
            "h-12 w-full appearance-none rounded-xl border border-border bg-background px-4 pr-10 text-sm text-foreground outline-none transition focus:border-blue-normal focus:ring-2 focus:ring-blue-normal/20 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          aria-hidden="true"
          size={16}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
        />
      </div>
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </div>
  );
}
