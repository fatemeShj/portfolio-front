"use client";
import { useState } from "react";
import Image from "next/image";
import darkMenuIcon from "@/public/dark-menu.svg";
import xmarkIcon from "@/public/xmark.svg";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "My skills", link: "/skill" },
    { id: 3, name: "About", link: "/about" },
    { id: 4, name: "Experience", link: "/experience" },
    { id: 5, name: "Project", link: "/project" },
    { id: 6, name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="fixed w-full z-50">
      <div className="container mx-auto flex justify-end items-center p-4">
        <div className="hidden lg:flex justify-between items-center gap-10">
          <ul className="hidden lg:flex space-x-10">
            {menuItems.map((item) => (
              <Link href={item.link} key={item.id}>
                <li key={item.id} className="cursor-pointer">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
          <ThemeSwitcher />
        </div>
        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <Image src={darkMenuIcon} alt="menu" width={20} height={20} />
        </button>
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
            {menuItems.map((item) => (
              <Link href={item.link} key={item.id}>
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
