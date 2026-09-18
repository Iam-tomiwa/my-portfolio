import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = "Microbiology & Bioinformatics Research — Ajayi Emmanuel Tomiwa";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    lead: "Life, through",
    accent: "a different lens.",
    sub: "Phage genomics, microbial communities, publications.",
  });
}
