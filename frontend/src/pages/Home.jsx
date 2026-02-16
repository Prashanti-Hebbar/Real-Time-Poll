import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div
      style={{
        background: "var(--card-bg)",
        backdropFilter: "blur(15px)",
        padding: "40px",
        borderRadius: "20px",
        width: "450px",
        maxWidth: "95%",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        color: "var(--text-color)",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Real-Time Poll Rooms</h1>

      <p style={{ opacity: 0.8, marginBottom: "20px" }}>
        Create and share polls instantly 🚀
      </p>

      <a href="/create-poll">
        <button
          style={{
            padding: "12px 18px",
            borderRadius: "10px",
            border: "none",
            background: "var(--button-bg)",
            color: "var(--button-text)",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Create a Poll
        </button>
      </a>
    </div>
  );
}
