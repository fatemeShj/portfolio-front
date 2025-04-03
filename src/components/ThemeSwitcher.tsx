import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../context/ThemeContext";
import moonIcon from "@/public/moon.svg";
import sunIcon from "@/public/sun.svg";

const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { theme, toggleTheme } = themeContext;

  return (
    <button onClick={toggleTheme}>
      {theme === "dark-theme" ? (
        <Image src={sunIcon} alt="sun" width={25} height={25} />
      ) : (
        <Image src={moonIcon} alt="moon" width={25} height={25} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
