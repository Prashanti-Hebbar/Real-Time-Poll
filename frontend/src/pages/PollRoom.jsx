import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import socket from "../socket";
import { v4 as uuidv4 } from "uuid";

export default function PollRoom() {
  const { pollId } = useParams();
  const [poll, setPoll] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [hasVoted, setHasVoted] = useState(false);

  const voterId = localStorage.getItem("voterId") || uuidv4();
  localStorage.setItem("voterId", voterId);

  useEffect(() => {
    fetchPoll();
    socket.emit("joinPoll", pollId);
    socket.on("updateResults", (updatedPoll) => {
      setPoll(updatedPoll);
      if (updatedPoll.voters.includes(voterId)) {
        setHasVoted(true);
      }
    });
    return () => socket.off("updateResults");
  }, [pollId]);

  const fetchPoll = async () => {
    try {
      const response = await API.get(`/poll/${pollId}`);

      setPoll(response.data);
      if (response.data.voters.includes(voterId)) {
        setHasVoted(true);
      }
    } catch (error) {
      setError("Error fetching poll");
    } finally {
      setLoading(false);
    }
  };

  const vote = async (index) => {
    try {
      await API.post(`/poll/${pollId}/vote`, {
        optionIndex: index,
        voterId,
      });
      setHasVoted(true); //Disable after voting
    } catch (error) {
      setError("You have already voted in this poll");
      setHasVoted(true);
    }
  };

  if (loading) return <h2>Loading...</h2>;

  const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0);
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
      <h2>{poll.question}</h2>

      <p style={{ marginBottom: "15px", opacity: 0.8 }}>
        Total Votes: {totalVotes}
      </p>

      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          alert("Link copied!");
        }}
        style={{
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          background: "var(--button-bg)",
          color: "var(--button-text)",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Copy Share Link
      </button>

      {error && <p style={{ color: "#ff4d4d", marginTop: "10px" }}>{error}</p>}

      <br />

      {poll.options.map((opt, index) => {
        const percentage =
          totalVotes === 0 ? 0 : ((opt.votes / totalVotes) * 100).toFixed(1);

        return (
          <div key={index} style={{ marginTop: "20px" }}>
            <button
              onClick={() => vote(index)}
              disabled={hasVoted}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                background: "var(--button-bg)",
                color: "var(--button-text)",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {opt.text}
            </button>

            <div style={{ marginTop: "5px" }}>
              {opt.votes} votes ({percentage}%)
            </div>

            <div
              style={{
                height: "8px",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "20px",
                marginTop: "6px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${percentage}%`,
                  height: "100%",
                  background: "#00ffcc",
                  borderRadius: "20px",
                  transition: "width 0.4s ease",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
