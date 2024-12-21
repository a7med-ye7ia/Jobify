import Navbar from "../Navbar/Navbar";
import "./Header.css"; // Import the CSS file

// eslint-disable-next-line react/prop-types
const Header = ({ title }) => {
  return (
    <>
      <Navbar />
      <header className="header">
        <div className="header-container">
          <h1 className="header-title">{title}</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
