// App.jsx

import { useState, useEffect } from "react";

import { Navbar } from "./Sections/Navbar/Navbar";
import { Chatbot } from "./Sections/Chatbot";
import { Hero } from "./Sections/Hero/Hero";
import { Footer } from "./Sections/Footer/Footer";

// Defult avatar
import avatar1 from "./assets/user1.png";

export const App = () => {
  const [userAvatar, setUserAvatar] = useState(avatar1);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);
  return (
    <>
      <Navbar userAvatar={userAvatar} setUserAvatar={setUserAvatar} />
      <Hero />
      <Chatbot userAvatar={userAvatar} />
      <Footer />
    </>
  );
};
