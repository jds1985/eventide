export default function WorldView() {
  return (
    <div style={styles.container}>
      {/* Static background */}
      <div style={styles.background} />

      {/* Rain layer */}
      <div style={styles.rain} />

      {/* UI */}
      <div style={styles.ui}>
        <h1 style={styles.title}>Eventide</h1>
        <p style={styles.subtitle}>Neon Rain City</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "black",
  },

  background: {
    position: "absolute",
    inset: 0,
    backgroundImage: "url('/visuals/neon-rain-city.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.7)",
    zIndex: 0,
  },

  rain: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
    backgroundSize: "2px 10px",
    animation: "rainMove 1.5s linear infinite",
    opacity: 0.25,
    zIndex: 1,
  },

  ui: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    padding: "32px",
    color: "white",
  },

  title: {
    fontSize: "2.5rem",
    margin: 0,
  },

  subtitle: {
    marginTop: "8px",
    opacity: 0.8,
  },
};
