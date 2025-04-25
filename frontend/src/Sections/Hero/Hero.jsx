//Sections/Hero/Hero.jsx

import bigAiBot from "../../assets/ai-bot-big.png";
import "./Hero.css"

export const Hero = () => {
  return (
    <div className="hero-container">
      <img className="big-avatar" src={bigAiBot} alt="Big AI bot avatar" />
      <div className="welcome-bubble">
        <h2 className="welcome-text">Hej där! Jag heter Livia och är en AI-assistent som kan hjälpa dig med kostfrågor under graviditeten. Skriv din fråga i chatten – det kan handla om ett specifikt livsmedel, en maträtt du undrar över, eller varför inte klistra in ett helt recept så kikar jag på det.</h2>
      </div>
    </div>
  );
};
