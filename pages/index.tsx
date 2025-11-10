export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      background: "#f6f8fa",
      color: "#0b2545",
      padding: 24
    }}>
      <div style={{
        textAlign: "center",
        borderRadius: 12,
        padding: 32,
        boxShadow: "0 6px 22px rgba(6, 15, 33, 0.08)",
        background: "white",
        maxWidth: 720
      }}>
        <h1 style={{ margin: 0, fontSize: 32 }}>Husky Parking Watch</h1>
        <p style={{ marginTop: 8, color: "#475569" }}>
          Under construction — we’ll be back soon with live campus parking conditions.
        </p>
        <p style={{ marginTop: 18, fontSize: 14, color: "#64748b" }}>
          Tip: If you want this to show a map or let users submit sightings, say the word and I’ll add it next.
        </p>
      </div>
    </main>
  )
}
