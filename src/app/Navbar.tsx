"use client";
import { useState } from "react";
import Image from "next/image";
import menuIcon from "@/public/menu.svg";
import xmarkIcon from "@/public/xmark.svg";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "My skills", link: "/skill" },
    { id: 3, name: "About", link: "/about" },
    { id: 4, name: "Experience", link: "/experience" },
    { id: 5, name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Fatemeh</div>

        {/* منوی دسکتاپ */}
        <ul className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <Link href={item.link} key={item.id}>
              <li key={item.id} className="cursor-pointer">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* دکمه همبرگری برای موبایل */}
        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <Image src={menuIcon} alt="menu" width={20} height={20} />
        </button>
      </div>

      {/* منوی موبایل - فول اسکرین */}
      {isOpen && (
        <div className="fixed inset-0 bg-primary bg-opacity-90 flex flex-col items-center justify-center text-white text-2xl">
          {/* دکمه بستن */}
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsOpen(false)}
          >
            <Image src={xmarkIcon} alt="xmark" width={20} height={20} />
          </button>

          {/* آیتم‌های منو */}
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.id} className="cursor-pointer">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
