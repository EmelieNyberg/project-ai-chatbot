//Sections/Hero/Hero.jsx

import bigAiBot from "../../assets/ai-bot-big.png"; // Import the image we want to show (the big AI avatar)
import "./Hero.css" // Import the CSS (styles) for the Hero section

// Create the Hero component
export const Hero = () => {
  // Main container for the Hero section
  return (
    <div className="hero-container">

      {/* Big avatar image of the AI bot */}
      <img className="big-avatar"
        src={bigAiBot}
        alt="Big AI bot avatar"
      />

      {/* Welcome text bubble */}
      <div className="welcome-bubble">
        <h2 className="welcome-text">Hej där! Jag heter Livia och är en AI-assistent som kan hjälpa dig med kostfrågor under graviditeten.</h2>
      </div>
    </div>
  );
};
