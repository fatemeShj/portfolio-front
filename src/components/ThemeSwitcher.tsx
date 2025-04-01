"use client";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import moonIcon from "@/public/moon.svg";
import sunIcon from "@/public/sun.svg";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <Image src={sunIcon} alt="sun" width={25} height={25} />
      ) : (
        <Image src={moonIcon} alt="moon" width={25} height={25} />
      )}
    </button>
  );
}
