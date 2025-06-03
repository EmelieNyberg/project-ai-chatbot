//Sections/Footer/Footer.jsx

// Import some icons from the react-icons library
import { TbBrandGithubFilled, TbBrandStackoverflow, TbBrandLinkedinFilled, TbCircleLetterEFilled } from "react-icons/tb";

// Import the CSS (styles) for the Footer
import "./Footer.css"

// Create the Footer component
export const Footer = () => {
  return (
    // Footer tag - the bottom part of the page
    <footer className="footer-container">

      {/* Section for social media icons */}
      <div className="footer-icons">

        {/* Link to LinkedIn profile */}
        <a
          className="footer-icon"
          href="https://linkedin.com/in/emelie-nyberg-kedert-753542111"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security feature
        >
          <TbBrandLinkedinFilled /> {/* LinkedIn icon */}
        </a>

        {/* Link to GitHub profile */}
        <a
          className="footer-icon"
          href="https://github.com/EmelieNyberg"
          target="_blank"
          rel="noopener noreferrer">
          <TbBrandGithubFilled /> {/* GitHub icon */}
        </a>

        {/* Link to Stack Overflow profile */}
        <a
          className="footer-icon"
          href="https://stackoverflowteams.com/c/technigo/users/656/"
          target="_blank"
          rel="noopener noreferrer">
          <TbBrandStackoverflow /> {/* Stack Overflow icon */}
        </a>

        {/* Link to Portfolio page */}
        <a
          className="footer-icon"
          href="https://emelie-nyberg-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">
          <TbCircleLetterEFilled /> {/* Letter E icon (Portfolio) */}
        </a>
      </div>

      {/* Copyright text */}
      <p className="footer-text">© 2025 Copyright - Developed by Emelie Nyberg Kedert</p>
    </footer>
  );
};
