"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const nextDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", nextDark);
    document.documentElement.classList.toggle("light", !nextDark);
    setDark(nextDark);
  }, []);
  function toggleTheme() {
    const nextDark = !dark;
    document.documentElement.classList.toggle("dark", nextDark);
    document.documentElement.classList.toggle("light", !nextDark);
    window.localStorage.setItem("theme", nextDark ? "dark" : "light");
    setDark(nextDark);
  }
  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      aria-label={`Aktifkan mode ${dark ? "terang" : "gelap"}`}
      className="size-10 min-h-10 !p-0 rounded-full bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
}
