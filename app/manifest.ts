import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "West Adelaide Legal",
    short_name: "West Adelaide Legal",
    description: "Trusted, compassionate legal support tailored to your needs.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffefb",
    theme_color: "#0b2638",
    icons: [
      {
        src: "/branding/west-adelaide-legal-favicon-180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/branding/west-adelaide-legal-favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
