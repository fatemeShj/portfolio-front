"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import linkedin from "@/public/linkedin.svg";
import email from "@/public/email.svg";
import github from "@/public/github.svg";
import darkLinkedin from "@/public/dark-linkedin.svg";
import darkEmail from "@/public/dark-email.svg";
import darkGithub from "@/public/dark-github.svg";

const Footer = () => {
  const themeContext = useContext(ThemeContext);
  const currentTheme = themeContext?.theme; // "dark-theme" or "light-theme"

  const socials = [
    {
      id: 1,
      name: "email",
      link: "mailto:fatemeeshojaeii@gmail.com",
      icon: currentTheme === "dark-theme" ? email : darkEmail,
    },
    {
      id: 2,
      name: "github",
      link: "https://github.com/fatemeshj",
      icon: currentTheme === "dark-theme" ? github : darkGithub,
    },
    {
      id: 3,
      name: "linkedin",
      link: "https://www.linkedin.com/in/fatemeh-shojaei-3929aa18a/",
      icon: currentTheme === "dark-theme" ? linkedin : darkLinkedin,
    },
  ];

  return (
    <div
      className={`flex justify-between items-center p-8 border-t mx-10 z-50 ${
        currentTheme === "dark-theme" ? "border-tertiary" : "border-customGray"
      }`}
    >
      <div>Fatemeh Shojaei</div>
      <div className="flex space-x-4">
        {socials?.map((social) => (
          <Link
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={social.icon} alt={social.name} width={24} height={24} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
