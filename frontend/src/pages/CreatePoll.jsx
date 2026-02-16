import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function CreatePoll() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const navigate = useNavigate();

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const handleSubmit = async () => {
    if (!question || options.some((opt) => !opt)) {
      alert("Please fill in the question and all options.");
      return;
    }
    try {
    const response = await API.post("/poll", {
      question,
      options,
    });
    navigate(`/poll-room/${response.data.pollId}`);
} catch (error) {
        alert("Error creating poll. Please try again.");
}
  };

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
      textAlign: "center"
    }}
  >
    <h2 style={{ marginBottom: "20px" }}>
      Create a New Poll
    </h2>

    <input
      type="text"
      placeholder="Enter your question"
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      style={{
        width: "100%",
        padding: "12px",
        margin: "8px 0",
        borderRadius: "10px",
        border: "none"
      }}
    />

    {options.map((opt, index) => (
      <input
        key={index}
        type="text"
        placeholder={`Option ${index + 1}`}
        value={opt}
        onChange={(e) =>
          handleOptionChange(index, e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          margin: "8px 0",
          borderRadius: "10px",
          border: "none"
        }}
      />
    ))}

    <button
      onClick={addOption}
      style={{
        marginTop: "10px",
        background: "#00ffcc",
        color: "#000",
        padding: "12px",
        borderRadius: "10px",
        border: "none",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      + Add Option
    </button>

    <br />

    <button
      onClick={handleSubmit}
      style={{
        marginTop: "15px",
        padding: "12px",
        borderRadius: "10px",
        border: "none",
        background: "var(--button-bg)",
        color: "var(--button-text)",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      Create Poll
    </button>
  </div>
);

}
