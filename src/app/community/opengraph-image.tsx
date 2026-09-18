import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = "Teaching & Community — Ajayi Emmanuel Tomiwa";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    lead: "Teaching, organising,",
    accent: "showing up.",
    sub: "Workshops, health programmes, student mentoring.",
  });
}
