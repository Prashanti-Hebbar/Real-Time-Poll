import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePoll from "./pages/CreatePoll";
import PollRoom from "./pages/PollRoom";

export default function App() {
  const toggleTheme = () => {
    document.body.classList.toggle("light");
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          padding: "8px 14px",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          background: "#ffffff",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        🌙 / ☀
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-poll" element={<CreatePoll />} />
        <Route path="/poll-room/:pollId" element={<PollRoom />} />
      </Routes>
    </>
  );
}
