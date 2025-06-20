'use client';
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
    document.documentElement.classList.toggle("dark", stored === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className="p-2 rounded focus:outline-none focus:ring"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
} 