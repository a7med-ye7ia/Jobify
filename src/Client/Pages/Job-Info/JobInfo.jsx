import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FiBriefcase,
  FiMapPin,
  FiDollarSign,
  FiCalendar,
  FiBook,
  FiTag,
  FiSend,
  FiBookmark,
} from "react-icons/fi";
import UI from "./ui";
import "./JobInfo.css";

function JobInfo() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:3000/job/getjob/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job:", error.message);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) {
    return <p className="loading-error">Loading job information...</p>;
  }

  return (
    <div className="job-info-container">
      <div className="job-info-card">
        <div className="job-info-content">
          <div className="job-header">
            <div className="job-title-section">
              <img src={job.photo} alt="logo" />
              <h1 className="job-title">{job.title}</h1>
              <p className="job-company">{job.company}</p>
            </div>
            <div className="job-actions">
              <button className="bookmark-button">
                <FiBookmark className="bookmark-icon" />
              </button>
            </div>
          </div>

          <div className="job-tags">
            {job.tags.map((tag, index) => (
              <span key={index} className="job-tag">
                <FiTag className="tag-icon" />
                {tag}
              </span>
            ))}
          </div>

          <div className="job-details-grid">
            <div className="job-detail-item">
              <div className="detail-icon-container">
                <FiBriefcase className="detail-icon" />
              </div>
              <div>
                <p className="detail-label">Company</p>
                <p className="detail-value">{job.company}</p>
              </div>
            </div>

            <div className="job-detail-item">
              <div className="detail-icon-container">
                <FiMapPin className="detail-icon" />
              </div>
              <div>
                <p className="detail-label">Location</p>
                <p className="detail-value">{job.location}</p>
              </div>
            </div>

            <div className="job-detail-item">
              <div className="detail-icon-container">
                <FiDollarSign className="detail-icon" />
              </div>
              <div>
                <p className="detail-label">Salary</p>
                <p className="detail-value">{job.salary}</p>
              </div>
            </div>

            <div className="job-detail-item">
              <div className="detail-icon-container">
                <FiCalendar className="detail-icon" />
              </div>
              <div>
                <p className="detail-label">Posted</p>
                <p className="detail-value">
                  {new Date(job.timeadded).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="job-description-section">
            <h2 className="section-title">Job Description</h2>
            <p className="job-description">{job.description}</p>
          </div>

          <div className="job-skills-section">
            <h2 className="section-title">Required Skills</h2>
            <div className="skills-list">
              {job.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <FiBook className="skill-icon" />
                  <span className="skill-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="job-apply-section">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="apply-button"
            >
              <FiSend className="apply-icon" />
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <UI
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        job={job}
      />
    </div>
  );
}

export default JobInfo;
