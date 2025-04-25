// Sections/Navbar/Navbar.jsx

import { Settings } from "../Settings/Settings";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="brand">
        <h1 className="brand-logo">Livia</h1>
      </div>

      <Settings />
    </div>
  );
};
