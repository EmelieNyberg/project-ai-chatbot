// Sections/Settings/ToggleAvatar.jsx

import avatar1 from "../../assets/user1.png";
import avatar2 from "../../assets/user2.png";
import avatar3 from "../../assets/user3.png";
import avatar4 from "../../assets/user4.png";
import avatar5 from "../../assets/user5.png";
import avatar6 from "../../assets/user6.png";
import avatar7 from "../../assets/user7.png";
import avatar8 from "../../assets/user8.png";
import "./ToggleAvatar.css";

export const ToggleAvatar = ({ userAvatar, setUserAvatar }) => {

  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8
  ];

  return (
    <section>
      <h3>Välj din avatar!</h3>

      <ul className="avatar-gallery">
        {avatars.map((avatar, index) => (
          <li key={index}>
            <button
              className={`avatar-btn ${userAvatar === avatar ? "active" : ""}`}
              onClick={() => setUserAvatar(avatar)}
            >
              <img src={avatar} alt={`Avatar ${index + 1}`} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
