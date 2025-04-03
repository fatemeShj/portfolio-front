import ImageSlider from "@/components/ImageSlider";
import { ImageType } from "@/types/Image";

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
    <div className=" max-w-2xl rounded-2xl overflow-hidden shadow-lg">
      <div className=" w-full ">
        <ImageSlider images={images} />
      </div>

      {/* <div className=" w-full bg-gradient-to-t from-primary to-transparent p-6 rounded-b-2xl"> */}
      <div className=" w-full bg-primary p-6 rounded-b-2xl">
        <p className="text-tertiary font-semibold text-lg">{title}</p>
        <h3 className="text-tertiary text-lg">{description}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
