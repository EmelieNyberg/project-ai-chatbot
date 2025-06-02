// App.jsx

// Import necessary functions and components
import { useState, useEffect } from "react";
import { Navbar } from "./Sections/Navbar/Navbar"; // Top menu bar
import { Chatbot } from "./Sections/Chatbot/Chatbot"; // Chat area
import { Hero } from "./Sections/Hero/Hero"; // Welcome section
import { Footer } from "./Sections/Footer/Footer"; // Bottom area

// Import avatar images
import avatar1 from "./assets/user1.png";
import avatar2 from "./assets/user2.png";
import avatar3 from "./assets/user3.png";
import avatar4 from "./assets/user4.png";
import avatar5 from "./assets/user5.png";
import avatar6 from "./assets/user6.png";
import avatar7 from "./assets/user7.png";
import avatar8 from "./assets/user8.png";

// Import CSS for the app
import "./App.css";

// Create the App component
export const App = () => {
  // State to store the selected avatar
  const [userAvatar, setUserAvatar] = useState(() => {
    // Check if the user has already picked an avatar before (saved in localStorage)
    const saved = localStorage.getItem("avatar");
    return saved || avatar1; // If not, use avatar1 as the default
  });

  // When the page loads: set the theme (light/dark) based on what is saved in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme"); // Look for saved theme
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme); // Apply the saved theme
    }
  }, []);

  // What will show on the screen
  return (
    <>
      {/* Top navigation bar with settings */}
      <Navbar
        userAvatar={userAvatar}
        setUserAvatar={(avatar) => {
          setUserAvatar(avatar); // Update the avatar
          localStorage.setItem("avatar", avatar); // Save new avatar to localStorage
        }} />

      {/* Main area: Welcome text + Chatbot */}
      <div className="hero-chat-wrapper">
        <Hero /> {/* Welcome message */}
        <Chatbot userAvatar={userAvatar} /> {/* Chatbot, pass avatar */}
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
};
