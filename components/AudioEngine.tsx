"use client";

import { useEffect, useRef } from "react";

export default function AudioEngine({ mode }: { mode: "ambient" | "music" }) {
  const ambientBase = useRef<HTMLAudioElement | null>(null);
  const rain = useRef<HTMLAudioElement | null>(null);
  const music1 = useRef<HTMLAudioElement | null>(null);
  const music2 = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    ambientBase.current = new Audio("/audio/neon_ambient_base.mp3");
    rain.current = new Audio("/audio/neon_rain.mp3");
    music1.current = new Audio("/audio/neon_music_1.mp3");
    music2.current = new Audio("/audio/neon_music_2.mp3");

    [ambientBase, rain, music1, music2].forEach(ref => {
      if (ref.current) {
        ref.current.loop = true;
        ref.current.volume = 0;
      }
    });

    ambientBase.current!.volume = 0.4;
    rain.current!.volume = 0.6;

    ambientBase.current!.play();
    rain.current!.play();
  }, []);

  useEffect(() => {
    if (!music1.current || !music2.current) return;

    if (mode === "music") {
      music1.current.volume = 0.4;
      music2.current.volume = 0.3;
      music1.current.play();
      music2.current.play();
    } else {
      music1.current.volume = 0;
      music2.current.volume = 0;
    }
  }, [mode]);

  return null;
}
