export const getInitialTheme = (): string => {
  if (typeof window === "undefined") {
    return "dark-theme";
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark-theme" : "light-theme";
};

export const saveThemeToStorage = (theme: string): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("theme", theme);
};
