// Sections/Settings/Settings.jsx

import { useState } from "react";
import { SidePanel } from "../../components/SidePanel";
import { ToggleTheme } from "./ToggleTheme";
import { ToggleAvatar } from "./ToggleAvatar";
import { LuSettings } from "react-icons/lu";
// import avatar1 from "../../assets/user1.png";
// import avatar2 from "../../assets/user2.png";
// import avatar3 from "../../assets/user3.png";
// import avatar4 from "../../assets/user4.png";
// import avatar5 from "../../assets/user5.png";
// import avatar6 from "../../assets/user6.png";
// import avatar7 from "../../assets/user7.png";
// import avatar8 from "../../assets/user8.png";
import "./Settings.css";


export const Settings = ({ userAvatar, setUserAvatar }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // const avatars = [
  //   avatar1,
  //   avatar2,
  //   avatar3,
  //   avatar4,
  //   avatar5,
  //   avatar6,
  //   avatar7,
  //   avatar8
  // ];

  return (
    <div>
      <button
        className="settings-btn"
        onClick={() => setIsPanelOpen(true)}
      >
        <LuSettings className="settings-icon" />
      </button>

      <SidePanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)}>
        <h2>Hej från sidpanelen!</h2>


        <ToggleTheme />

        <ToggleAvatar userAvatar={userAvatar} setUserAvatar={setUserAvatar} />


      </SidePanel>
    </div>
  );
};
