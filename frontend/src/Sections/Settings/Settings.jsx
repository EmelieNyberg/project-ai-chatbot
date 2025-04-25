// Sections/Settings/Settings.jsx

import { useState } from "react";
import { SidePanel } from "../../components/SidePanel";
import avatar1 from "../../assets/user1.png";
import avatar2 from "../../assets/user2.png";
import avatar3 from "../../assets/user3.png";
import avatar4 from "../../assets/user4.png";
import avatar5 from "../../assets/user5.png";
import avatar6 from "../../assets/user6.png";
import avatar7 from "../../assets/user7.png";
import avatar8 from "../../assets/user8.png";
import "./Settings.css";

export const Settings = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsPanelOpen(true)}>Öppna sidpanel</button>

      <SidePanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)}>
        <h2>Hej från sidpanelen!</h2>
        <p>Här kan du lägga vad du vill – t.ex. inställningar, info, formulär, osv.</p>
        <section>

          <h3>Välj din avatar!</h3>

          <ul className="avatar-gallery">
            <li>
              <button className="avatar-btn">
                <img src={avatar1} alt="Avatar" />
              </button>
            </li>
            <li>
              <button className="avatar-btn">
                <img src={avatar2} alt="Avatar" />
              </button>
            </li>
            <li>
              <button className="avatar-btn">
                <img src={avatar3} alt="Avatar" />
              </button>
            </li>
            <li>
              <button className="avatar-btn">
                <img src={avatar4} alt="Avatar" />
              </button>
            </li>
            <li>
              <button className="avatar-btn">
                <img src={avatar5} alt="Avatar" />
              </button>
            </li>
            <li>
              <button className="avatar-btn">
                <img src={avatar6} alt="Avatar" />
              </button>
            </li>
            <li>
              <button className="avatar-btn">
                <img src={avatar7} alt="Avatar" />
              </button>
            </li>
            <li>
              <button className="avatar-btn">
                <img src={avatar8} alt="Avatar" />
              </button>
            </li>
          </ul>

        </section>
      </SidePanel>
    </div>
  );
};
