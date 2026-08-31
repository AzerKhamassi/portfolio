import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Azer Khamassi — Full Stack Engineer",
    short_name: "Azer Khamassi",
    description:
      "Full Stack Engineer with 5+ years building responsive, scalable web apps in React, Node.js & TypeScript.",
    start_url: "/en",
    display: "standalone",
    background_color: "#f2ead9",
    theme_color: "#0e0e11",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
