import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-normal disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-blue-normal text-white hover:bg-blue-hover active:bg-blue-active",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border border-blue-normal bg-transparent text-blue-normal hover:bg-blue-light active:bg-blue-light-active dark:hover:bg-blue-dark/30 dark:active:bg-blue-dark/50",
        secondary:
          "bg-blue-light text-blue-normal hover:bg-blue-light-hover active:bg-blue-light-active dark:bg-blue-dark dark:text-blue-light dark:hover:bg-blue-dark-hover dark:active:bg-blue-dark-active",
        ghost:
          "bg-transparent text-foreground hover:bg-surface active:bg-border",
        link: "text-blue-normal underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 px-6 py-3",
        sm: "min-h-9 px-4 py-2",
        lg: "min-h-12 px-8 py-3",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Component = asChild ? Slot.Root : "button";
  return (
    <Component
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

function buttonStyles(
  variant: VariantProps<typeof buttonVariants>["variant"] = "default",
  className?: string,
) {
  return buttonVariants({ variant, className });
}

export { Button, buttonStyles, buttonVariants };
