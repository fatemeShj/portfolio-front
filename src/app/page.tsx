import Image from "next/image";
import mainImage from "@/public/main.svg";

export default function Home() {
  return (
    <div className="max-w-4xl w-full px-6 md:px-12">
      <div className="relative z-10 text-gray-900 mt-16">
        <p className="text-primary uppercase font-semibold">
          FRONT-END DEVELOPER
        </p>
        <h2 className="text-5xl font-bold mt-2">
          Hello, my name is <br /> Fatemeh Shojaei
        </h2>
        <p className="text-gray-600 mt-4 max-w-lg">
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-primary text-white px-5 py-2 rounded shadow hover:bg-primary">
            Projects
          </button>
          <button className="border border-gray-800 text-gray-800 px-5 py-2 rounded shadow hover:bg-gray-200">
            LinkedIn
          </button>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2  z-0">
        <Image src={mainImage} alt="main" />
      </div>
    </div>
  );
}
