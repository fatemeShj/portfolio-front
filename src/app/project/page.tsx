import { getProjects } from "@/api/getProjects";
import ProjectCard from "./ProjectCard";
import { Project as ProjectType } from "@/types/Project";

const Project = async () => {
  const projectData: ProjectType[] = await getProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.name}
          description={project.description}
          images={project.image}
        />
      ))}
    </div>
  );
};

export default Project;
