"use client";

import { Check, ChevronDown } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";

type ContactSourceSelectProps = {
  name: string;
  placeholder: string;
  options: readonly string[];
};

export function ContactSourceSelect({
  name,
  placeholder,
  options,
}: ContactSourceSelectProps) {
  return (
    <SelectPrimitive.Root name={name} required>
      <SelectPrimitive.Trigger
        id="contact-source"
        aria-labelledby="contact-source-label"
        className="contact-form-control inline-flex h-11 w-full items-center justify-between rounded-full border px-4 text-left text-sm outline-none transition hover:bg-white/5 focus:border-white focus:ring-2 focus:ring-white/25 data-[placeholder]:text-white/75"
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild>
          <ChevronDown aria-hidden="true" className="size-4 text-white" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={8}
          align="start"
          className="contact-select-content z-[100] max-h-64 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-2xl border p-1.5 shadow-xl outline-none"
        >
          <SelectPrimitive.Viewport>
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option}
                value={option}
                className="flex cursor-pointer select-none items-center justify-between rounded-xl px-3 py-2.5 text-sm text-white outline-none transition-colors data-[highlighted]:bg-white/15 data-[highlighted]:text-white data-[state=checked]:bg-white/10"
              >
                <SelectPrimitive.ItemText>{option}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator>
                  <Check aria-hidden="true" className="size-4" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
