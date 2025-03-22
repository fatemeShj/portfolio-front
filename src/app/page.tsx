import Image from "next/image";
import mainImage from "@/public/main.svg";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-6 md:mx-52">
      <div className="relative z-10 text-gray-900 mt-10 md:mt-40">
        <p className="text-primary uppercase font-semibold text-2xl">
          FRONT-END DEVELOPER
        </p>
        <h2 className="text-5xl font-bold mt-2">
          Hello, my name is <br /> Fatemeh Shojaei
        </h2>
        <p className="text-gray-600 mt-4 max-w-lg">
          {`Welcome to my portfolio! I'm a creative and detail-oriented Front-End
          Developer who thrives on crafting seamless user experiences. Always
          eager to learn and take on new challenges, I turn ideas into
          interactive, responsive, and visually appealing web applications.
          Let’s build something amazing together!`}
        </p>
        <div className="mt-6 flex space-x-4">
          <Link href="/experience">
            <Button isPrimary>Experiences</Button>
          </Link>
          <Button isSecondary>LinkedIn</Button>
        </div>
      </div>

      <div className="absolute top-0 right-0 z-0">
        <Image src={mainImage} alt="main" className="w-auto h-auto" />
      </div>
    </div>
  );
}
