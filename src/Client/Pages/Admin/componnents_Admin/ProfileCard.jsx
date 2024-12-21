import { IoCameraReverseOutline } from "react-icons/io5";
import "./ProfileCard.css"; 

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img
          src="/profile/OIP.jfif"
          alt="User profile"
          className="profile-image"
        />
        <div className="camera-icon-container">
          <IoCameraReverseOutline className="camera-icon" />
        </div>
      </div>
      <div className="text-center">
        <h2 className="profile-name">Amr...!</h2>
        <p className="profile-description">
          Your account is ready, you can now apply for advice.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
