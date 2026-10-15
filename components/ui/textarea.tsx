import * as React from "react";
import { cn } from "@/lib/utils";

type TextareaProps = React.ComponentProps<"textarea"> & {
  label?: string;
  hint?: string;
};

function Textarea({
  className,
  label,
  hint,
  id,
  name,
  ...props
}: TextareaProps) {
  const textareaId = id ?? name;

  return (
    <div className="grid gap-2">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        data-slot="textarea"
        className={cn(
          "min-h-32 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive",
          className,
        )}
        {...props}
      />
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </div>
  );
}

export { Textarea };
