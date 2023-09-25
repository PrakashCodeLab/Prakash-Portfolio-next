'use client';

import { createContext, useEffect, useState } from "react";

export interface ThemeContextType {
  theme: string;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem('theme');
    return value || 'light';
  }
  return 'light'; // Return a default value if window is undefined
}

export const ThemecontextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    return getLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    if (theme !== undefined) {
      localStorage.setItem("theme", theme as string); // Type assertion here
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme || 'light', toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
