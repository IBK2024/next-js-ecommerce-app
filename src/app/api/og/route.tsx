import { siteDescription, siteName } from "@/config/constants";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = new URL(request.url);

  const baseUrl = `${url.protocol}//${url.host}`;
  const title = searchParams.get("title") || siteName;
  const description = searchParams.get("description") || siteDescription;
  const logoUrl = `${baseUrl}/images/logo.png`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#f9fafb",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "ui-sans-serif, system-ui",
        padding: "64px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        <img
          src={logoUrl}
          width={96}
          height={96}
          style={{
            borderRadius: "12px",
            objectFit: "cover",
            backgroundColor: "white",
          }}
          alt="Logo"
        />
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#1d4ed8",
            letterSpacing: "-1px",
          }}
        >
          {title}
        </h1>
      </div>

      <p
        style={{
          fontSize: "36px",
          fontWeight: 600,
          color: "#374151",
          marginBottom: "12px",
          textAlign: "center",
        }}
      >
        {description}
      </p>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
