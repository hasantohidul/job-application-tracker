import React from "react";
import { useTheme } from "../contexts/ThemeContext";

/**
 * ThemeSwitcher component that provides a button to toggle the theme
 * @returns {JSX.Element} The ThemeSwitcher component
 */
function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="bg-gray-500 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
      onClick={toggleTheme}
    >
      Switch to {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeSwitcher;
