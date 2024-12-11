
  import React from "react";
  import "./Home.css";
  import Category from "./Category";
import Navbar from "../../Components/Navbar/Navbar";

  const Home = () => {
    return (
      <div>
        <Navbar/>
        <div className="home">
          <div className="hero-section">
            <h1>Find Your Dream Job Today!</h1>
            <p>
              Connecting Talent with Opportunity: Your Gateway to Career Success
            </p>

            <div className="search-container">
              <input
                style={{ color: "black"} }
                type="text"
                placeholder="Search by Job Title, Company or Location"
                className="search-input"
              />
              <button className="search-btn">
                <span className="search-icon">🔍</span>
                Search
              </button>
            </div>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-icon">💼</span>
                <div className="stat-info">
                  <h3>25,850</h3>
                  <p>Jobs</p>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">👥</span>
                <div className="stat-info">
                  <h3>10,250</h3>
                  <p>Candidates</p>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🏢</span>
                <div className="stat-info">
                  <h3>18,400</h3>
                  <p>Companies</p>
                </div>
              </div>
            </div>

            <div className="companies-section">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png"
                alt="Spotify"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
                alt="Slack"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1024px-Adobe_Corporate_Logo.png"
                alt="Adobe"
              />
              <img
                src="https://assets.asana.biz/transform/ba9b63a3-f255-4088-b5fe-14ab4628f50b/asana-logo-black"
                alt="Asana"
              />
              <img
                src="https://linear.app/static/linear-logo.svg"
                alt="Linear"
              />
            </div>
          </div>
        </div>
        <Category />
      </div>
    );
  };

  export default Home;
