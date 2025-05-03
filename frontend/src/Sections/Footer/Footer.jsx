//Sections/Footer/Footer.jsx

import { TbBrandGithubFilled, TbBrandStackoverflow, TbBrandLinkedinFilled, TbCircleLetterEFilled } from "react-icons/tb";
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <a
          className="footer-icon"
          href="https://linkedin.com/in/emelie-nyberg-kedert-753542111"
          target="_blank"
          rel="noopener noreferrer">
          <TbBrandLinkedinFilled />
        </a>
        <a
          className="footer-icon"
          href="https://github.com/EmelieNyberg"
          target="_blank"
          rel="noopener noreferrer">
          <TbBrandGithubFilled />
        </a>
        <a
          className="footer-icon"
          href="https://stackoverflowteams.com/c/technigo/users/656/"
          target="_blank"
          rel="noopener noreferrer">
          <TbBrandStackoverflow />
        </a>
        <a
          className="footer-icon"
          href="https://emelie-nyberg-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">
          <TbCircleLetterEFilled />
        </a>
      </div>
      <p>© 2025 Copyright - Developed by Emelie Nyberg Kedert</p>
    </footer>
  );
};
