import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name} – ${profile.rotatingTitles[0]}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          color: "#e2e8f0",
          background: "linear-gradient(135deg, #060913 0%, #16204a 60%, #0e4a5c 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#22d3ee" }}>Portfolio</div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 16 }}>{profile.name}</div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 20, color: "#a5b4fc" }}>{profile.rotatingTitles.join("  |  ")}</div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 40, color: "#94a3b8" }}>9+ years in QA  |  ISTQB CTFL  |  Mumbai, India</div>
      </div>
    ),
    size,
  );
}
