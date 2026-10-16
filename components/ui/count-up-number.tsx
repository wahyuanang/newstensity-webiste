"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function parseCount(value: string) {
  const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!match) return null;

  const [, prefix, digits, suffix] = match;
  const target = Number(digits.replace(/[.,]/g, ""));
  const groupSeparator = digits.includes(".") ? "." : digits.includes(",") ? "," : ",";

  return { prefix, target, suffix, groupSeparator };
}

export function CountUpNumber({
  value,
  className,
  duration = 1800,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const parsed = useMemo(() => parseCount(value), [value]);

  useEffect(() => {
    if (!parsed || !elementRef.current) return;

    const element = elementRef.current;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(parsed.target);
          return;
        }

        const startTime = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - (1 - progress) ** 4;
          setCount(Math.round(parsed.target * eased));
          if (progress < 1) frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, parsed]);

  if (!parsed) return <span className={className}>{value}</span>;

  const formatted = Math.floor(count)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, parsed.groupSeparator);

  return (
    <span ref={elementRef} className={className} aria-label={value}>
      {parsed.prefix}{formatted}{parsed.suffix}
    </span>
  );
}
