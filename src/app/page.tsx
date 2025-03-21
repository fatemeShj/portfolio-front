import Image from "next/image";
import mainImage from "@/public/main.svg";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="max-w-4xl w-full px-6 md:px-12">
      <div className="relative z-10 text-gray-900 mt-28">
        <p className="text-primary uppercase font-semibold">
          FRONT-END DEVELOPER
        </p>
        <h2 className="text-5xl font-bold mt-2">
          Hello, my name is <br /> Fatemeh Shojaei
        </h2>
        <p className="text-gray-600 mt-4 max-w-lg">
          Welcome to my portfolio! I'm a creative and detail-oriented Front-End
          Developer who thrives on crafting seamless user experiences. Always
          eager to learn and take on new challenges, I turn ideas into
          interactive, responsive, and visually appealing web applications.
          Let’s build something amazing together!
        </p>
        <div className="mt-6 flex space-x-4">
          <Button isPrimary>Experiences</Button>
          <Button isSecondary>LinkedIn</Button>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 z-0">
        <Image src={mainImage} alt="main" />
      </div>
    </div>
  );
}
