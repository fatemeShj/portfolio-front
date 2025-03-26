import ImageSlider from "@/components/ImageSlider";
import { Image as ImageType } from "@/types/Image";

const ProjectCard = ({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: ImageType[];
}) => {
  return (
    <div className="relative max-w-sm rounded-2xl overflow-hidden shadow-lg">
      <div className="relative w-full h-56">
        <ImageSlider images={images} />
      </div>

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 to-transparent p-4 rounded-b-2xl">
        <p className="text-gray-300 text-sm">{title}</p>
        <h3 className="text-white font-semibold text-lg">{description}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
