import type { MetadataRoute } from "next";

const baseUrl =
  "https://daniloescobar.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url:
        `${baseUrl}/projects/paypart`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url:
        `${baseUrl}/projects/liio`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url:
        `${baseUrl}/projects/alta`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
