import Image from "next/image";
import Button from "@/components/Button";
import mainImage from "@/assets/images/main.svg";
import doodleRound from "@/assets/images/doodle-round.svg";

const Main = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16">
        <div className="order-2 lg:order-1 mt-10 lg:mt-0 lg:w-1/2 flex flex-col">
          <p className="text-secondary uppercase font-semibold text-xl sm:text-2xl">
            FRONT-END DEVELOPER
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2 leading-tight">
            Hello, my name is <br className="hidden sm:block" /> Fatemeh Shojaei
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg max-w-lg">
            {`Welcome to my portfolio! I'm a creative and detail-oriented
            Front-End Developer who thrives on crafting seamless user
            experiences. Always eager to learn and take on new challenges, I
            turn ideas into interactive, responsive, and visually appealing web
            applications. Let's build something amazing together!`}
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:fatemeeshojaeii@gmail.com"
              className="w-full sm:w-auto"
            >
              <Button isPrimary className="w-full sm:w-auto">
                Hire me
              </Button>
            </a>
            <a
              href="/front-end-developer.pdf"
              download
              className="w-full sm:w-auto"
            >
              <Button isSecondary className="w-full sm:w-auto">
                Download resume
              </Button>
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:w-1/2 flex justify-center relative">
          <div className="relative w-full max-w-[500px] aspect-square">
            <Image
              src={doodleRound}
              alt="Decorative background"
              className="w-full h-full object-contain"
              priority
            />
            <div className="absolute inset-0 pt-40 flex items-start justify-center">
              <div className="w-[60%] aspect-square relative">
                <Image
                  src={mainImage}
                  alt="Fatemeh Shojaei"
                  className="w-full h-full object-contain animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
