// components/SidePanel.jsx

// Import React functions and libraries
import { useRef, useEffect } from "react"; // React hooks
import { motion, AnimatePresence } from "framer-motion"; // For animations
import { FocusTrap } from "focus-trap-react"; // Keeps keyboard focus inside the panel
import { IoClose } from "react-icons/io5"; // Close (X) icon
import "./SidePanel.css"; // Import the CSS for styling

// Define the SidePanel component
export const SidePanel = ({ isOpen, onClose, children }) => {
  // Create a reference to the panel element
  const panelRef = useRef();

  // This effect runs when the panel opens or closes
  useEffect(() => {
    // Function that checks if user clicks outside the panel
    const handleClickOutside = (event) => {
      // If panel exists and the click is NOT inside the panel
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose(); // Then close the panel
      }
    };

    // If the panel is open, listen for clicks on the whole page
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // When the panel closes or the component unmounts, stop listening
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]); // Runs again if isOpen or onClose changes

  return (
    <AnimatePresence>
      {/* Only show if panel is open */}
      {isOpen && (
        <>
          {/* Dark overlay background with fade-in and fade-out animation */}
          <motion.div
            className="sidepanel-overlay"
            initial={{ opacity: 0 }} // Start transparent
            animate={{ opacity: 0.5 }} // Fade to 50% opacity
            exit={{ opacity: 0 }} // Fade out
          />

          {/* The sliding side panel */}
          <motion.aside
            ref={panelRef} // Connect this HTML element to panelRef
            className="sidepanel"
            initial={{ x: "100%" }} // Start off-screen (right)
            animate={{ x: 0 }} // Slide in to position
            exit={{ x: "100%" }} // Slide out when closed
            transition={{ duration: 0.3 }} // Animation time: 0.3 seconds
          >
            {/* Lock keyboard focus inside the panel */}
            <FocusTrap>
              <div className="sidepanel-content">
                <div className="sidepanel-btn">
                  <button className="sidepanel-close-btn" onClick={onClose}>
                    <IoClose className="sidepanel-close-icon" />
                  </button>
                </div>
                {/* Insert anything (settings, content) inside the panel */}
                {children}
              </div>
            </FocusTrap>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};