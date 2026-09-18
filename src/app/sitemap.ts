import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/** Every route is static, so one build timestamp is the honest lastModified. */
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/engineering"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/research"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/community"), lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
