import { BsBookmarkPlus, BsBookmarkPlusFill } from "react-icons/bs";
import { IoBagCheck } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { LuWalletMinimal } from "react-icons/lu";
import { TbClockHour4 } from "react-icons/tb";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Job.css"; 

const Job = ({ job }) => {
  const [bookmark, setBookmark] = useState(false);
  const navigate = useNavigate();

  const handleJobDetails = () => {
    navigate(`/job-info/${job._id}`);
  };

  const toggleBookmark = () => {
    setBookmark(!bookmark);
  };

  return (
    <div className="job-container">
      <div className="job-card">
        <div className="top-row">
          <div className="time-badge">
            <p>{job.timeadded} Ago</p>
          </div>
          <button onClick={toggleBookmark} className="bookmark-button">
            {bookmark ? (
              <BsBookmarkPlusFill className="bookmark-active" />
            ) : (
              <BsBookmarkPlus className="bookmark-inactive" />
            )}
          </button>
        </div>

        <div className="middle-row">
          <div className="logo-container">
            <img src={job.photo} alt="company logo" />
          </div>
          <div>
            <p className="job-title">{job.title}</p>
            <p className="job-company">{job.category}</p>
          </div>
        </div>

        <div className="bottom-row">
          <div className="detail-item">
            <IoBagCheck className="detail-icon" />
            <p>{job.category}</p>
          </div>
          <div className="detail-item">
            <TbClockHour4 className="detail-icon" />
            <p>{job.type}</p>
          </div>
          <div className="detail-item">
            <LuWalletMinimal className="detail-icon" />
            <p>{job.salary}</p>
          </div>
          <div className="detail-item">
            <FaLocationDot className="detail-icon" />
            <p>{job.location}</p>
          </div>
        </div>

        <div className="details-button-container">
          <button onClick={handleJobDetails} className="details-button">
            Job Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
