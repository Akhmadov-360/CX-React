import { createContext, useEffect, useState } from "react";

const ThemeCX = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.background = theme === "light" ? "#fff" : "#000";
    document.body.style.color = theme === "light" ? "#000" : "#fff";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return <ThemeCX.Provider value={{ theme, toggleTheme }}>{children}</ThemeCX.Provider>;
};

export { ThemeCX, ThemeProvider };
