type Props = {
  mode: "ambient" | "music";
  setMode: (m: "ambient" | "music") => void;
};

export default function ModeToggle({ mode, setMode }: Props) {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <button onClick={() => setMode("ambient")}>
        🌫 Ambient
      </button>
      <button onClick={() => setMode("music")}>
        🎶 Music
      </button>
    </div>
  );
}
