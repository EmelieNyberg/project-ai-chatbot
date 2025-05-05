// Sections/Settings/ToggleTheme.jsx

import { useEffect, useState } from "react";
import "./ToggleTheme.css"

export const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="theme-toggle"
        className="toggle"
        checked={theme === "dark"}
        onChange={themeToggle}
      />
      <label htmlFor="theme-toggle">
        {theme === "light" ? "🌙 Mörkt läge" : "☀️ Ljust läge"}
      </label>
    </div>
  );
};
