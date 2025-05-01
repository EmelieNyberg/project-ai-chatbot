// components/SidePanel.jsx
import { motion, AnimatePresence } from "framer-motion";
import { FocusTrap } from "focus-trap-react";
import { IoClose } from "react-icons/io5";
import "./SidePanel.css"; // skapa denna också!

export const SidePanel = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Bakgrunds-overlay */}
          <motion.div
            className="sidepanel-overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          />

          {/* Själva sidpanelen */}
          <motion.aside
            className="sidepanel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <FocusTrap>
              <div className="sidepanel-content">
                <div className="sidepanel-btn">
                  <button
                    className="sidepanel-close-btn"
                    onClick={onClose}>
                    <IoClose className="sidepanel-close-icon" />
                  </button>
                </div>
                {children}
              </div>
            </FocusTrap>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};