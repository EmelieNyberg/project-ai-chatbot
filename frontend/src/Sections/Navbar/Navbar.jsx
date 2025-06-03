// Sections/Navbar/Navbar.jsx

// Import the Settings panel (where the user can change avatar, theme, etc.)
import { Settings } from "../Settings/Settings";

// Import the CSS (styles) for the Navbar
import "./Navbar.css";

// Create the Navbar component
export const Navbar = ({ userAvatar, setUserAvatar }) => {
  return (
    // Main container for the navigation bar
    <div className="navbar-container">

      {/* Brand name/logo section */}
      <div className="brand">
        <h1 className="brand-logo">Livia</h1> {/* App name */}
      </div>

      {/* Settings button (where user can change avatar, theme, etc.) */}
      <Settings userAvatar={userAvatar} setUserAvatar={setUserAvatar} />
    </div>
  );
};
