// Sections/Settings/ToggleAvatar.jsx

// Import avatar images (user pictures)
import avatar1 from "../../assets/user1.png";
import avatar2 from "../../assets/user2.png";
import avatar3 from "../../assets/user3.png";
import avatar4 from "../../assets/user4.png";
import avatar5 from "../../assets/user5.png";
import avatar6 from "../../assets/user6.png";
import avatar7 from "../../assets/user7.png";
import avatar8 from "../../assets/user8.png";
import "./ToggleAvatar.css"; // Import CSS file for styling

// This is the ToggleAvatar component
export const ToggleAvatar = ({ userAvatar, setUserAvatar }) => {
  // Create an array with all the avatar images
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
      {/* Heading for the avatar selection */}
      <h3>AVATAR</h3>

      {/* Create a gallery (list) of avatars */}
      <ul className="avatar-gallery">
        {/* Loop through the avatars and create a button for each one */}
        {avatars.map((avatar, index) => (
          <li key={index}>
            {/* Button to select an avatar */}
            <button
              className={`avatar-btn ${userAvatar === avatar ? "active" : ""}`}
              onClick={() => setUserAvatar(avatar)} // When clicked, set this avatar as selected
            >
              {/* Show the avatar image */}
              <img src={avatar} alt={`Avatar ${index + 1}`} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
