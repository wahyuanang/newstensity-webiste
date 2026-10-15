import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
};
export function Input({ label, hint, id, className, ...props }: InputProps) {
  const inputId = id ?? props.name;
  return (
    <div className="grid gap-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-blue-normal focus:ring-2 focus:ring-blue-normal/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </div>
  );
}
