import Image from "next/image";
import Link from "next/link";
import linkedin from "@/public/linkedin.svg";
import email from "@/public/email.svg";
import github from "@/public/github.svg";

const Footer = () => {
  const socials = [
    {
      id: 1,
      name: "email",
      link: "mailto:fatemeeshojaeii@gmail.com",
      icon: email,
    },
    {
      id: 2,
      name: "github",
      link: "https://github.com/fatemeshj",
      icon: github,
    },
    {
      id: 3,
      name: "linkedin",
      link: "https://www.linkedin.com/in/fatemeh-shojaei-3929aa18a/",
      icon: linkedin,
    },
  ];

  return (
    <div className="flex justify-between items-center p-8 border-t border-secondary mx-10 z-50">
      <div>Fatemeh Shojaei</div>
      <div className="flex space-x-4">
        {socials.map((social) => (
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
