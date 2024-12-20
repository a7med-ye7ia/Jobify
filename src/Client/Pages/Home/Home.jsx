import {JOB} from "../Jobs/job.js"
import Job from "../../Components/Job/Job.jsx";
import "./Home.css";
import Category from "./Category";
import Navbar from "../../Components/Navbar/Navbar";
import Blog from "../../Components/Blogs/Blog.jsx";

const Home = () => {
  const recentJobsList = JOB.map((job, index) => {
    return <Job key={index} job={job} />;
});

  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="hero-section">
          <h1>Find Your Dream Job Today!</h1>
          <p>
            Connecting Talent with Opportunity: Your Gateway to Career Success
          </p>

          <div className="search-container">
            <input
              style={{ color: "black" }}
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
      <div className="w-full bg-white h-auto py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="font-bold text-[32px] md:text-[50px] leading-tight text-gray-900">
              Recent Jobs Available
            </p>
            <p className="font-normal text-[14px] md:text-[16px] text-gray-600 mt-2">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet
            </p>
          </div>
          <div className="text-center md:text-end">
            <a
              href="/Jobs"
              className="font-semibold text-[18px] md:text-[24px] text-[#309689] underline hover:text-[#20675c] transition-colors duration-300"
            >
              View All
            </a>
          </div>
        </div>
        {recentJobsList}
      </div>
      <Category />
      <Blog />
    </div>
  );
};

export default Home;
