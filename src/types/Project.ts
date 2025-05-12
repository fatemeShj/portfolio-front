import { ImageType } from "./Image";
export type ProjectType = {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  description: string;
  image: ImageType[];
  link: string;
};
