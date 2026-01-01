import { ImageResponse } from "next/og";
import { siteConfig } from "@/data";

export const runtime = "edge";

export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            padding: "40px",
          }}
        >
          {/* Icon/Logo placeholder */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
              marginBottom: "30px",
              fontSize: "40px",
            }}
          >
            {"</>"}
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            {siteConfig.name}
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: "32px",
              color: "#a1a1aa",
              margin: 0,
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            {siteConfig.title}
          </p>

          {/* Skills */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: "800px",
            }}
          >
            {siteConfig.skills.slice(0, 5).map((skill) => (
              <span
                key={skill}
                style={{
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.1)",
                  color: "#e4e4e7",
                  fontSize: "20px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#71717a",
            fontSize: "18px",
          }}
        >
          <span>🌐</span>
          <span>{siteConfig.url.replace(/https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
