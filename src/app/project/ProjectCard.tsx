import ImageSlider from "@/components/ImageSlider";
import { ImageType } from "@/types/Image";
import Link from "next/link";

const ProjectCard = ({
  title,
  description,
  images,
  projectUrl,
}: {
  title: string;
  description: string;
  images: ImageType[];
  projectUrl: string;
}) => {
  return (
    <div className="max-w-2xl rounded-2xl overflow-hidden shadow-lg">
      <div className="w-full">
        <ImageSlider images={images} />
      </div>

      <div className="w-full bg-primary p-6 rounded-b-2xl">
        <p className="text-tertiary font-semibold text-lg">{title}</p>
        <h3 className="text-tertiary text-lg mb-4">{description}</h3>
        <Link href={projectUrl || "#"}>
          <button className="bg-secondary text-white px-4 py-2 rounded-xl hover:bg-secondary-dark transition">
            View Project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
