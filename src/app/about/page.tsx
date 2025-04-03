import Image from "next/image";
import Button from "@/components/Button";
import about from "@/public/about.svg";

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12">
        <div className="order-2 lg:order-1 max-w-2xl">
          <h1 className="text-secondary text-4xl sm:text-5xl font-bold mb-6">
            About me
          </h1>
          <p className="text-base sm:text-lg mb-8">
            Front-End Developer with 7+ years of experience in building
            responsive, interactive, and high-performance web applications.
            Proficient in React.js, Next.js, TypeScript, and Tailwind CSS, with
            expertise in state management (Redux, React Query) and PWA
            development. Skilled in SEO optimization, SSR, and API integration,
            delivering scalable and user-friendly solutions. Passionate about
            clean code, performance optimization, and seamless user experiences.
          </p>
          <Button isPrimary className="w-full sm:w-auto">
            Resume
          </Button>
        </div>

        <div className="order-1 lg:order-2 w-full lg:w-auto flex justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
            <Image
              src={about}
              alt="About me illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
