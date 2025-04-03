export const getThemeFromStorage = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "dark-theme");
    return "dark-theme";
  }
  return theme;
};

export const saveThemeToStorage = (theme: string) => {
  localStorage.setItem("theme", theme);
};
