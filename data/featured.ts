export type FeaturedItem = {
  id: string;
  type: "artist" | "glass" | "video" | "new-artist" | "new-glass";

  title: string;
  description: string;

  image: string;

  href: string;

  active: boolean;
};

export const featuredItems: FeaturedItem[] = [
  {
    id: "featured-artist-test",
    type: "artist",
    title: "Featured Artist",
    description: "Discover a glass artist featured by the BORO community.",
    image: "/featured/artist-placeholder.png",
    href: "/artists",
    active: true,
  },

  {
    id: "featured-glass-test",
    type: "glass",
    title: "Featured Glass",
    description: "Explore a glass piece and learn more about the artist behind it.",
    image: "/featured/glass-placeholder.png",
    href: "/glass",
    active: true,
  },

  {
    id: "featured-video-test",
    type: "video",
    title: "Featured Video",
    description: "Watch glassblowing techniques, projects, and community videos.",
    image: "/featured/video-placeholder.png",
    href: "/techniques",
    active: true,
  },
];