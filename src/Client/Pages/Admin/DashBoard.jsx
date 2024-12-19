import ProfilePage from "./ProfilePage";
import "./css/DashBoard.css";

const DashBoard = () => {
  return (
    <div className="full-screen bg-light">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay"></div>
      </div>
      {/* Profile Section */}
      <div className="profile profile-container">
        <div className="profile-content">
          <ProfilePage />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
