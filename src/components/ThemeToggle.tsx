"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const storageKey = "tomiwa-color-theme";

export default function ThemeToggle() {
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applySystemTheme = () => {
      try {
        if (localStorage.getItem(storageKey)) return;
      } catch {
        // The toggle still works when browser storage is unavailable.
      }
      document.documentElement.dataset.theme = media.matches ? "dark" : "light";
    };
    const syncPreference = (event: StorageEvent) => {
      if (event.key !== storageKey) return;
      document.documentElement.dataset.theme =
        event.newValue === "dark" || event.newValue === "light"
          ? event.newValue
          : media.matches
            ? "dark"
            : "light";
    };
    media.addEventListener("change", applySystemTheme);
    window.addEventListener("storage", syncPreference);
    return () => {
      media.removeEventListener("change", applySystemTheme);
      window.removeEventListener("storage", syncPreference);
    };
  }, []);

  function toggleTheme() {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      /* This choice still applies for the current visit. */
    }
    setAnnouncement(`${theme === "dark" ? "Dark" : "Light"} theme enabled`);
  }

  return (
    <>
      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label="Switch color theme"
        title="Switch light / dark theme"
      >
        <Moon className="theme-moon" size={18} aria-hidden="true" />
        <Sun className="theme-sun" size={18} aria-hidden="true" />
      </button>
      <span className="sr-only" role="status">
        {announcement}
      </span>
    </>
  );
}
