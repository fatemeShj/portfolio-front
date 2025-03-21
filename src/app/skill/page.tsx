import { getSkills } from "@/api/getSkills";
import { Skill as SkillType } from "@/types/Skill";

const Skill = async () => {
  const skillData: SkillType[] = await getSkills();

  return (
    <div className="flex flex-col md:flex-row">
      <div>
        {skillData
          ?.filter((skill) => !skill.is_short)
          .map((skill) => (
            <div key={skill.id}>{skill.name}</div>
          ))}
      </div>
      <div>
        {skillData
          ?.filter((skill) => skill.is_short)
          .map((skill) => (
            <div key={skill.id}>{skill.name}</div>
          ))}
      </div>
    </div>
  );
};

export default Skill;
