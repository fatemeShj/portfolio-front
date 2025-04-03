import Image from "next/image";
import Button from "@/components/Button";
import mainImage from "@/public/main.svg";
import doodleRound from "@/public/doodle-round.svg";

const Main = () => {
  return (
    <div className="mx-6 md:mx-52">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-gray-900 mt-10 md:mt-40 md:w-1/2">
          <p className="text-secondary uppercase font-semibold text-2xl">
            FRONT-END DEVELOPER
          </p>
          <h2 className="text-5xl text-tertiary font-bold mt-2">
            Hello, my name is <br /> Fatemeh Shojaei
          </h2>
          <p className="text-tertiary mt-4 max-w-lg">
            {`Welcome to my portfolio! I'm a creative and detail-oriented Front-End
        Developer who thrives on crafting seamless user experiences. Always
        eager to learn and take on new challenges, I turn ideas into
        interactive, responsive, and visually appealing web applications.
        Let’s build something amazing together!`}
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="mailto:fatemeeshojaeii@gmail.com">
              <Button isPrimary>Hire me</Button>
            </a>

            <Button isSecondary>Download resume</Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <Image
            src={doodleRound}
            alt="doodleRound"
            className="w-[500px] h-[500px] mt-10 md:mt-20"
          />
          <Image
            src={mainImage}
            alt="main"
            className="w-[300px] h-[300px] absolute left-32 top-48 md:left-52 md:top-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
