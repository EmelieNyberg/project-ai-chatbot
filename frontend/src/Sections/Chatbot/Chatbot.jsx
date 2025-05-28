// frontend/Chatbot.jsx

import { useRef, useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { IoWarning } from "react-icons/io5";

import aiAvatar from "../../assets/ai-bot.png";
import "./Chatbot.css";

export const Chatbot = ({ userAvatar }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    const introMessage = {
      role: "assistant",
      content:
        "Skriv din fråga här i chatten – det kan handla om ett specifikt livsmedel, en maträtt, eller varför inte klistra in ett helt recept så kikar jag på det.",
    };

    // Visa "Livia skriver..." först
    setIsTyping(true);

    const timeout = setTimeout(() => {
      setMessages([introMessage]);
      setIsTyping(false);
    }, 1500); // justera tiden som du vill

    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUserMessage = { role: "user", content: input };
    const updatedMessages = [...messages, newUserMessage];

    setMessages(updatedMessages);
    setInput("");

    const typingDelay = setTimeout(() => {
      setIsTyping(true);
    }, 600);

    try {
      const res = await fetch("https://project-ai-chatbot-backend.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();
      const newAiMessage = { role: "assistant", content: data.reply };

      setTimeout(() => {
        clearTimeout(typingDelay);
        setMessages((prev) => [...prev, newAiMessage]);
        setIsTyping(false);
      }, 1500); // justera delay efter behov

    } catch (error) {
      console.error("Fel vid API-anrop:", error);
      clearTimeout(typingDelay);
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTo({
        top: chatWindowRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isTyping]);

  return (
    <div className="chatbot-container">
      <div className="chat-window" ref={chatWindowRef}>
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

            <p className="message-bubble">
              <strong>{msg.role === "user" ? "Du:" : "Livia:"}</strong> {msg.content}
            </p>
          </div>
        ))}

        {isTyping && (
          <div className="chat-message ai">
            <div className="avatar">
              <img src={aiAvatar} alt="AI" />
            </div>
            <p className="message-bubble typing"><strong>Livia:</strong> Skriver<span className="dots"></span></p>
          </div>
        )}
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

      <p className="important-msg"><IoWarning />AI kan begå misstag. Kontrollera viktig information.</p>
    </div>
  );
};
