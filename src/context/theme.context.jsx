import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();
const THEME_KEY = "theme";

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY));
    return savedTheme !== null ? savedTheme : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', dark);
    localStorage.setItem(THEME_KEY, JSON.stringify(dark));
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };

export const useTheme = () => useContext(ThemeContext);

