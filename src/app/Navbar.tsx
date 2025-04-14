"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import xmarkIcon from "@/assets/images/xmark.svg";
import darkMenuIcon from "@/assets/images/dark-menu.svg";
import lightMenuIcon from "@/assets/images/light-menu.svg";

import ThemeSwitcher from "@/components/ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.theme;
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "My skills", link: "/skill" },
    { id: 3, name: "About", link: "/about" },
    { id: 5, name: "Project", link: "/project" },
    { id: 6, name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="fixed w-full z-50 bg-[var(--bg-color)]">
      <div className="container mx-auto flex justify-end items-center p-4">
        <div className="hidden lg:flex justify-between items-center gap-10">
          <ul className="hidden lg:flex space-x-10">
            {menuItems?.map((item) => (
              <Link href={item.link} key={item.id}>
                <li key={item.id} className="cursor-pointer">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
          <ThemeSwitcher />
        </div>
        <div className="lg:hidden flex gap-5">
          <ThemeSwitcher />
          <button className="" onClick={() => setIsOpen(true)}>
            <Image
              src={currentTheme === "dark-theme" ? lightMenuIcon : darkMenuIcon}
              alt="menu"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-primary bg-opacity-90 flex flex-col items-center justify-center text-white text-2xl">
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsOpen(false)}
          >
            <Image src={xmarkIcon} alt="xmark" width={20} height={20} />
          </button>

          <ul className="space-y-10">
            {menuItems?.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                onClick={() => setIsOpen(false)}
              >
                <li key={item.id} className="cursor-pointer">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
