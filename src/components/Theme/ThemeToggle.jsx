import React, { useContext } from "react";
import { ThemeCX } from "../../core/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeCX);

  return (
    <>
      <h3>Theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};

export default ThemeToggle;
