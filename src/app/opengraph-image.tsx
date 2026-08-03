import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "eend — an indie AI product studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const DUCK = "#7EBFB8";
const BG = "#0C1410";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: BG,
        }}
      >
        {/* Duck mark, drawn from shapes (body, head, bill, eye) */}
        <div style={{ display: "flex", position: "relative", width: 230, height: 130 }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 62,
              width: 190,
              height: 96,
              borderRadius: 48,
              background: DUCK,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 118,
              top: 0,
              width: 100,
              height: 100,
              borderRadius: 50,
              background: DUCK,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 208,
              top: 34,
              width: 0,
              height: 0,
              borderTop: "17px solid transparent",
              borderBottom: "17px solid transparent",
              borderLeft: `44px solid ${DUCK}`,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 178,
              top: 32,
              width: 14,
              height: 14,
              borderRadius: 7,
              background: BG,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 128,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#EBF0E8",
          }}
        >
          eend
          <span style={{ color: DUCK }}>.</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 34,
            color: "#6B8070",
          }}
        >
          An indie AI product studio
        </div>
      </div>
    ),
    { ...size },
  );
}
