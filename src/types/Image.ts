export type Image = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: Format;
    small: Format;
    medium: Format;
    large: Format;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  folderPath: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: null;
};

type Format = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};
