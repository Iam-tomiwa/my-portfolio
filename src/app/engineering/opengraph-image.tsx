import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = "Frontend Engineering — Ajayi Emmanuel Tomiwa";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    lead: "Interfaces with",
    accent: "intention.",
    sub: "Six years of products, and the architecture underneath.",
  });
}
