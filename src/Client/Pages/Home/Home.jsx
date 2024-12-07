import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Find Your Dream Job Today!</h1>
        <p>
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>

        <div className="search-container">
          <input
            type="text"
            placeholder="Job Title or Company"
            className="search-input"
          />
          <select className="location-select">
            <option value="">Select Location</option>
            <option value="ny">New York</option>
            <option value="sf">San Francisco</option>
            <option value="ld">London</option>
          </select>
          <select className="category-select">
            <option value="">Select Category</option>
            <option value="tech">Technology</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
          </select>
          <button className="search-btn">
            <span className="search-icon">🔍</span>
            Search Job
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
          <img src="https://linear.app/static/linear-logo.svg" alt="Linear" />
        </div>
      </div>
    </div>
  );
};

export default Home;
