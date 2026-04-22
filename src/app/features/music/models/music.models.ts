export interface Song {
  id: number;
  title: string;
  description?: string;
  image: string;
  url: string;
  releaseDate: Date;
  isFeatured?: boolean;
}
