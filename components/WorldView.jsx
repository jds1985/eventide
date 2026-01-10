export default function WorldView() {
  return (
    <div style={styles.container}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.video}
      >
        <source src="/visuals/neon-rain-city.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div style={styles.overlay} />

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
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.45)",
    zIndex: 1,
  },
  ui: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
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
