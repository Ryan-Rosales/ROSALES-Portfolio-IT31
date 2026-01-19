"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = (localStorage.getItem("theme") as Theme | null) ?? null;
  if (stored === "light" || stored === "dark") return stored;
  // Default to dark to satisfy the request; fallback to system preference.
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      className="button-link"
      onClick={toggle}
      aria-label="Toggle color theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      style={{ marginTop: 10 }}
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
