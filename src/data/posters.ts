
export type Poster = {
  title: string;
  tag: string;
  src?: string;
};

const posterImages = [
  "image81.jpeg",
  "image82.jpeg",
  "image83.jpeg",
  "image84.jpeg",
  "image85.jpeg",
  "image86.jpeg",
  "image87.jpeg",
  "image88.jpeg",
  "image89.jpg",
  "image90.jpeg",
  "image91.jpeg",
  "image92.jpeg",
  "image93.jpg",
  "image94.jpg",
  "image95.jpg",
  "image96.jpg",
  "image97.jpg",
  "image98.jpg",
  "image99.jpg",
  "image100.jpeg",
];

export const posters: Poster[] = posterImages.map((filename, i) => ({
  title: `Poster ${String(i + 1).padStart(2, "0")}`,
  tag: ["Branding", "Ad Creative", "Social Post", "Campaign"][i % 4],
  src: `/assets/${filename}`,
}));
