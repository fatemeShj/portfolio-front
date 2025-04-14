import Image from "next/image";
import { getSkills } from "@/api/getSkills";
import { SkillType } from "@/types/Skill";
import checkIcon from "@/assets/images/circle-check.svg";

const Skill = async () => {
  const skills: SkillType[] = await getSkills();

  const detailedSkills = skills?.filter((skill) => !skill.is_short) || [];
  const shortSkills = skills?.filter((skill) => skill.is_short) || [];

  return (
    <div>
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col md:flex-row gap-12 items-center justify-center">
        <div className="flex-1 max-w-md space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold  mb-8">
            My <span className="text-secondary">Expertise</span>
          </h2>

          {detailedSkills?.map((skill) => (
            <div
              key={skill.id}
              className="flex gap-2 group relative p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-primary hover:border-blue-200"
            >
              <Image src={checkIcon} alt="check" className="w-7 h-7" />
              <h3 className="text-gray-800 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>

              <div className="absolute -inset-1 rounded-lg bg-blue-100/50 -z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="flex-1 max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Tech <span className="text-secondary">Toolbox</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {shortSkills?.map((skill) => (
              <span
                key={skill.id}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 shadow-xs hover:shadow-sm transition-all hover:scale-105 border border-primary hover:border-indigo-200"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
