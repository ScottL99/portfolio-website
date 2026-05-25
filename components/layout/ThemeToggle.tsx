"use client";

import { useEffect, useState } from "react";
import IconButton from "@/components/ui/IconButton";
import {
  getPreferredTheme,
  THEME_STORAGE_KEY,
  type ThemeMode,
} from "@/lib/theme";

function MoonIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24">
      <path
        d="M20.4 15.3a7.72 7.72 0 0 1-10.72-10.7 8 8 0 1 0 10.72 10.7Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24">
      <path
        d="M12 8.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Zm0-5v2.1m0 13.4v2.1M4.22 4.22l1.48 1.48m12.6 12.6 1.48 1.48M1 12h2.1m17.8 0H23M4.22 19.78l1.48-1.48m12.6-12.6 1.48-1.48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const nextTheme = getPreferredTheme();

    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }, []);

  const handleToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <IconButton
      className="text-green"
      onClick={handleToggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Dark theme" : "Light theme"}
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}
