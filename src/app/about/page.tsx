import Image from "next/image";
import Button from "@/components/Button";
import about from "@/public/about.svg";
export default function About() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-6 md:mx-52">
      <div className="mt-10 md:mt-40 space-y-5">
        <div className="text-secondary text-5xl font-bold">About me</div>
        <p className="text-gray-600 mt-4 max-w-lg">
          {`Front-End Developer with 7+ years of experience in building responsive, interactive, and high-performance web
applications. Proficient in React.js, Next.js, TypeScript, and Tailwind CSS, with expertise in state management
(Redux, React Query) and PWA development. Skilled in SEO optimization, SSR, and API integration, delivering
scalable and user-friendly solutions. Passionate about clean code, performance optimization, and seamless user
experiences.`}
        </p>
        <Button isPrimary>Resume</Button>
      </div>
      <div className="mt-10 md:mt-40">
        <Image
          src={about}
          alt="main"
          width={10}
          height={10}
          className="w-[524px] h-[524px]"
        />
      </div>
    </div>
  );
}
