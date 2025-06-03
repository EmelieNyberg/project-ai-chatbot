// Sections/Settings/ToggleTheme.jsx

// Import React hook for state handling
import { useState } from "react";

// Import icons for Sun and Moon (for Light and Dark theme)
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";

// Import CSS file for styling
import "./ToggleTheme.css"

// This is the ToggleTheme component
export const ToggleTheme = () => {
  // Create a piece of state to keep track of the theme (light or dark)
  // Try to get the saved theme from localStorage, otherwise start with "light"
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // Function to switch between light and dark theme
  const themeToggle = () => {
    // Check what the current theme is, and switch to the opposite
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); // Update the theme in React state
    document.documentElement.setAttribute("data-theme", newTheme); // Update the theme for the whole page
    localStorage.setItem("theme", newTheme); // Save the new theme in localStorage
  };

  return (
    <section>
      {/* Heading for the theme toggle */}
      <h3>TEMA</h3>

      {/* Theme toggle switch */}
      <div className="theme-toggle">
        {/* Hidden checkbox that we can style nicely */}
        <input
          type="checkbox"
          id="theme-toggle" // This connects to the label
          className="toggle"
          checked={theme === "dark"} // Checkbox is checked if the theme is dark
          onChange={themeToggle} // When user clicks, change the theme
        />
        {/* The label that shows the sun or moon icon depending on theme */}
        <label htmlFor="theme-toggle">
          {/* Span for the thumb that moves (and changes icon) */}
          <span className={`toggle-thumb ${theme === "dark" ? "dark" : "light"}`}>
            {theme === "dark" ? <TbMoonFilled /> : <TbSunFilled />}
          </span>
        </label>
      </div>
    </section>
  );
};
