import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = "Ajayi Emmanuel Tomiwa — Frontend Engineer & Bioinformatics Researcher";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    lead: "Code &",
    accent: "discovery.",
    sub: "Frontend engineer. Bioinformatics researcher.",
  });
}
