import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";

export const runtime = "edge";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #030712 0%, #0b1120 50%, #030712 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 500,
            height: 500,
            borderRadius: "9999px",
            background: "rgba(59,130,246,0.35)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            right: -60,
            width: 500,
            height: 500,
            borderRadius: "9999px",
            background: "rgba(139,92,246,0.35)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
              fontSize: 32,
              fontWeight: 700,
              color: "white",
            }}
          >
            UD
          </div>
          <div style={{ fontSize: 28, color: "#94a3b8" }}>
            {siteConfig.role}
          </div>
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#94a3b8",
            marginTop: 24,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Scalable full-stack apps, cloud-native systems & AI-powered products.
        </div>
      </div>
    ),
    { ...size }
  );
}
