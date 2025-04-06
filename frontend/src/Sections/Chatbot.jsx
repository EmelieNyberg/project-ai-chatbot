// frontend/Chatbot.jsx

import { useState } from "react";
import "./Chatbot.css";

export const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUserMessage = { role: "user", content: input };
    const updatedMessages = [...messages, newUserMessage];

    setMessages(updatedMessages);
    setInput("");

    const res = await fetch("http://localhost:8080/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: updatedMessages }),
    });

    const data = await res.json();
    const newAiMessage = { role: "assistant", content: data.reply };
    setMessages([...updatedMessages, newAiMessage]);
  };

  return (
    <div className="chatbot-container">

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.role === "user" ? "user" : "ai"}`}
          >
            <strong>{msg.role === "user" ? "Du:" : "AI:"}</strong> {msg.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Skriv din fråga här..."
          rows={3}
        />
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};
