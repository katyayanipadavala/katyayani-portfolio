// Real poster images: image81.jpg … image100.jpg live in the project's public folder.
// Until a file exists, its tile automatically falls back to the placeholder visual.
export type Poster = { title: string; tag: string; src?: string };
export const posters: Poster[] = Array.from({ length: 20 }, (_, i) => ({
  title: `Poster ${String(i + 1).padStart(2, "0")}`,
  tag: ["Branding", "Ad Creative", "Social Post", "Campaign"][i % 4] as string,
  src: `/image${81 + i}.jpg`,
}));
