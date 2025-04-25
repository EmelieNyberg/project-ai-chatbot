// Sections/Navbar/Navbar.jsx

import { Settings } from "../Settings/Settings";
import "./Navbar.css";

export const Navbar = ({ userAvatar, setUserAvatar }) => {
  return (
    <div className="navbar-container">
      <div className="brand">
        <h1 className="brand-logo">Livia</h1>
      </div>

      <Settings userAvatar={userAvatar} setUserAvatar={setUserAvatar} />
    </div>
  );
};
