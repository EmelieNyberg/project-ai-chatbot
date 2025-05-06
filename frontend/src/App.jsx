// App.jsx

import { useState, useEffect } from "react";

import { Navbar } from "./Sections/Navbar/Navbar";
import { Chatbot } from "./Sections/Chatbot";
import { Hero } from "./Sections/Hero/Hero";
import { Footer } from "./Sections/Footer/Footer";

import avatar1 from "./assets/user1.png";
import avatar2 from "./assets/user2.png";
import avatar3 from "./assets/user3.png";
import avatar4 from "./assets/user4.png";
import avatar5 from "./assets/user5.png";
import avatar6 from "./assets/user6.png";
import avatar7 from "./assets/user7.png";
import avatar8 from "./assets/user8.png";

import "./App.css";

export const App = () => {
  const [userAvatar, setUserAvatar] = useState(() => {
    const saved = localStorage.getItem("avatar");
    return saved || avatar1;
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);
  return (
    <>
      <Navbar userAvatar={userAvatar} setUserAvatar={(avatar) => {
        setUserAvatar(avatar);
        localStorage.setItem("avatar", avatar);
      }} />
      <div className="hero-chat-wrapper">
        <Hero />
        <Chatbot userAvatar={userAvatar} />
      </div>
      <Footer />
    </>
  );
};
