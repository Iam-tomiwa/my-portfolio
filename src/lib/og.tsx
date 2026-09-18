import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OgCard = {
  /** Plain first half of the headline. */
  lead: string;
  /** Accented second half, mirroring the page's own <h1>. */
  accent: string;
  /** One supporting line. */
  sub: string;
};

/**
 * Shared Open Graph card. Rendered at build time into a static PNG, so each
 * route segment gets its own share image without duplicating the layout.
 * Satori supports a flexbox subset of CSS — every container sets display.
 */
export function renderOgCard({ lead, accent, sub }: OgCard) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1a2c20",
          color: "#f1f4e8",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, fontWeight: 700, letterSpacing: "-0.04em" }}>
          <span>ajayitomiwa</span>
          <span style={{ color: "#e2cc60" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 104, fontWeight: 700, letterSpacing: "-0.055em", lineHeight: 1.06 }}>
            <span>{lead}&nbsp;</span>
            <span style={{ color: "#d6cb69" }}>{accent}</span>
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 32, color: "#bdcbb6", letterSpacing: "-0.02em" }}>
            <span>{sub}</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24, color: "#bdcbb6" }}>
          <span>Ajayi Emmanuel Tomiwa</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
