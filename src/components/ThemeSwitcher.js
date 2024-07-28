import React from "react";
import { useTheme } from "../contexts/ThemeContext";

/**
 * ThemeSwitcher component that provides a button to toggle the theme
 * @returns {JSX.Element} The ThemeSwitcher component
 */
function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="btn btn-secondary" onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeSwitcher;
