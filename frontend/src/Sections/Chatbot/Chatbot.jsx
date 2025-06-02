// frontend/Chatbot.jsx

import { useRef, useEffect, useState } from "react";
import { IoSend } from "react-icons/io5"; // Send icon
import { IoWarning } from "react-icons/io5"; // Warning icon
import aiAvatar from "../../assets/ai-bot.png"; // AI avatar image
import "./Chatbot.css"; // Import styling

// Create the Chatbot component
export const Chatbot = ({ userAvatar }) => {
  // State to keep the user's input text
  const [input, setInput] = useState("");

  // State to store all chat messages (user and AI)
  const [messages, setMessages] = useState([]);

  // State to show if AI is "typing..."
  const [isTyping, setIsTyping] = useState(false);

  // Reference to the chat window (to scroll to bottom)
  const chatWindowRef = useRef(null);

  // When the page loads: show a welcome message from AI
  useEffect(() => {
    const introMessage = {
      role: "assistant", // Who is speaking
      content:
        "Skriv din fråga här i chatten – det kan handla om ett specifikt livsmedel, en maträtt, eller varför inte klistra in ett helt recept så kikar jag på det.",
    };

    // Show "Livia skriver..." (typing) first
    setIsTyping(true);

    const timeout = setTimeout(() => {
      setMessages([introMessage]); // Show the welcome message
      setIsTyping(false); // Remove "Livia skriver..."
    }, 1500); // Wait 1.5 seconds

    return () => clearTimeout(timeout); // Clean up if component closes
  }, []);

  // When user submits a question
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Create a message object from the user
    const newUserMessage = { role: "user", content: input };

    // Add user's message to the chat history
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);

    // Clear the input field
    setInput("");

    // After 600ms, show "Livia skriver..."
    const typingDelay = setTimeout(() => {
      setIsTyping(true);
    }, 600);

    try {
      // Send chat messages to the server (backend)
      const res = await fetch("https://project-ai-chatbot-backend.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }), // Send full chat
      });

      // Wait for AI reply
      const data = await res.json();
      const newAiMessage = { role: "assistant", content: data.reply };

      // Show AI reply after 1.5 seconds
      setTimeout(() => {
        clearTimeout(typingDelay); // Remove typing indicator
        setMessages((prev) => [...prev, newAiMessage]); // Add AI message
        setIsTyping(false); // Stop showing "Livia skriver..."
      }, 1500); // Delay with 1.5 seconds

    } catch (error) {
      console.error("Fel vid API-anrop:", error); // If something goes wrong
      clearTimeout(typingDelay);
      setIsTyping(false);
    }
  };

  // Scroll to the bottom when a new message arrives or when typing starts
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTo({
        top: chatWindowRef.current.scrollHeight, // Scroll to bottom
        behavior: "smooth" // Smooth scrolling
      });
    }
  }, [messages, isTyping]); // Both all messages and "Livia skriver..."

  // What will show on the screen
  return (
    <div className="chatbot-container">
      {/* Chat window */}
      <div className="chat-window" ref={chatWindowRef}>
        {/* Loop through all messages */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.role === "user" ? "user" : "ai"}`}
          >
            {/* Show avatar depending on who is speaking */}
            <div className="avatar">
              <img
                src={msg.role === "user" ? userAvatar : aiAvatar}
                alt={msg.role === "user" ? "User" : "AI"}
              />
            </div>

            {/* Show the text message */}
            <p className="message-bubble">
              <strong>{msg.role === "user" ? "Du:" : "Livia:"}</strong> {msg.content}
            </p>
          </div>
        ))}

        {/* Show "Livia skriver..." when AI is typing */}
        {isTyping && (
          <div className="chat-message ai">
            <div className="avatar">
              <img src={aiAvatar} alt="AI" />
            </div>
            <p className="message-bubble typing"><strong>Livia:</strong> Skriver<span className="dots"></span></p>
          </div>
        )}
      </div>

      {/* Input field and send button */}
      <form
        className="input-container"
        onSubmit={handleSubmit}>

        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value); // Save what the user types
            e.target.style.height = "auto"; // Reset height
            e.target.style.height = `${e.target.scrollHeight}px`; // Adjust height to text
          }}
          placeholder="Skriv din fråga här..." // Placeholder text
        />

        <button
          className={`send-btn ${input.trim() ? "active" : "inactive"}`}
          type="submit"
          disabled={!input.trim()} // Disable button if input is empty
        >
          <IoSend className="send-icon" size={24} />
        </button>
      </form>

      {/* Small note below the chat */}
      <p className="important-msg"><IoWarning />AI kan begå misstag. Kontrollera viktig information.</p>
    </div>
  );
};
