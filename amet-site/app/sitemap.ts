import type { MetadataRoute } from "next";

import { blogPosts, servicePages } from "@/data/siteData";

const baseUrl = "https://amet-k.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const rootEntry: MetadataRoute.Sitemap[number] = {
    url: `${baseUrl}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  };

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: `${baseUrl}/${page.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page.priority === "p0" ? 0.9 : page.priority === "p1" ? 0.8 : 0.6,
  }));

  const blogRoot: MetadataRoute.Sitemap[number] = {
    url: `${baseUrl}/blog/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  };

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    rootEntry,
    ...serviceEntries,
    blogRoot,
    ...blogEntries,
    {
      url: `${baseUrl}/spasibo/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${baseUrl}/politika/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
