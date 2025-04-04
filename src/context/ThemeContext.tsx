"use client";
import React, { useEffect, createContext, useState, ReactNode } from "react";
import { getInitialTheme, saveThemeToStorage } from "@/utils/theme";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("dark-theme");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
  };

  useEffect(() => {
    if (!mounted) return;

    saveThemeToStorage(theme);
    document.documentElement.className = theme;
    document.documentElement.style.setProperty(
      "color-scheme",
      theme === "dark-theme" ? "dark" : "light"
    );
  }, [theme, mounted]);

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDark: theme === "dark-theme",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
