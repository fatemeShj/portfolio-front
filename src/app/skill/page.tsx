import { getSkills } from "@/api/getSkills";
import { SkillType } from "@/types/Skill";
import skillBackground from "@/public/skill-background.png";

const Skill = async () => {
  const skills: SkillType[] = await getSkills();

  const detailedSkills = skills?.filter((skill) => !skill.is_short) || [];
  const shortSkills = skills?.filter((skill) => skill.is_short) || [];

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-cover bg-center px-6 py-12"
      style={{ backgroundImage: `url(${skillBackground.src})` }}
    >
      <div className="flex-1 max-w-lg space-y-4">
        {detailedSkills.map((skill) => (
          <div key={skill.id} className="text-white text-lg font-semibold">
            {skill.name}
          </div>
        ))}
      </div>

      <div className="flex-1 max-w-lg space-y-4">
        {shortSkills.map((skill) => (
          <div key={skill.id} className="text-white text-lg font-semibold">
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
