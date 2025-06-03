// Sections/Settings/Settings.jsx

// Import React hook to manage the open/close state of the panel
import { useState } from "react";

// Import the SidePanel component (the sliding panel from the side)
import { SidePanel } from "../../components/SidePanel";

// Import the ToggleTheme component (light/dark mode switch)
import { ToggleTheme } from "./ToggleTheme";

// Import the ToggleAvatar component (to select an avatar image)
import { ToggleAvatar } from "./ToggleAvatar";

// Import the settings icon from React Icons
import { LuSettings } from "react-icons/lu";

// Import the CSS file for styling
import "./Settings.css";

// This is the Settings component
export const Settings = ({ userAvatar, setUserAvatar }) => {
  // Create a piece of state to track if the side panel is open or not
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div>
      {/* Button to open the settings panel */}
      <button
        className="settings-btn"
        onClick={() => setIsPanelOpen(true)} // When clicked, open the side panel
      >
        {/* Settings gear icon inside the button */}
        <LuSettings className="settings-icon" />
      </button>

      {/* The SidePanel, shown only if isPanelOpen is true */}
      <SidePanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)}>
        {/* Title inside the side panel */}
        <h2 className="heading">Personliga inställningar</h2>

        {/* Toggle for changing between dark/light mode */}
        <ToggleTheme />

        {/* Component to choose a user avatar */}
        <ToggleAvatar userAvatar={userAvatar} setUserAvatar={setUserAvatar} />
      </SidePanel>
    </div>
  );
};
