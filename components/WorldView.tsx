"use client";

import AudioEngine from "./AudioEngine";
import ModeToggle from "./ModeToggle";
import { useState } from "react";

export default function WorldView() {
  const [mode, setMode] = useState<"ambient" | "music">("ambient");

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.85,
        }}
      >
        <source src="/visuals/neon_rain_loop.webm" type="video/webm" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      />

      {/* UI */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "24px",
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>Neon Rain City</h1>
          <p style={{ opacity: 0.7 }}>Eventide</p>
        </div>

        <ModeToggle mode={mode} setMode={setMode} />
      </div>

      <AudioEngine mode={mode} />
    </div>
  );
}
