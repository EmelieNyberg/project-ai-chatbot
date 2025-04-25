// frontend/Chatbot.jsx

import { useState } from "react";
import { IoSend } from "react-icons/io5";
import aiAvatar from "../assets/ai-bot.png";
import userAvatar from "../assets/user1.png";
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
            <div className="avatar">
              <img
                src={msg.role === "user" ? userAvatar : aiAvatar}
                alt={msg.role === "user" ? "User" : "AI"}
              />
            </div>

            <div className="message-bubble">
              <strong>{msg.role === "user" ? "Du:" : "Livia:"}</strong> {msg.content}
            </div>
          </div>
        ))}
      </div>

      <form
        className="input-container"
        onSubmit={handleSubmit}>

        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            e.target.style.height = "auto"; // först nollställ höjd
            e.target.style.height = `${e.target.scrollHeight}px`; // sätt höjd = innehållets höjd
          }}
          placeholder="Skriv din fråga här..."
        />

        <button
          className={`send-btn ${input.trim() ? "active" : "inactive"}`}
          type="submit"
          disabled={!input.trim()}
        >
          <IoSend className="send-icon" size={24} />
        </button>
      </form>
    </div>
  );
};
