import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/DeleteJob.css";

const DeleteJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/job/getjobs");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        await axios.delete(`http://localhost:3000/job/deletejobs/${id}`);
        alert("Job deleted successfully!");
        fetchJobs();
      } catch (error) {
        console.error("Error deleting job:", error);
        alert("Failed to delete job");
      }
    }
  };

  return (
    <div className="delete-job-container">
      <h2 className="delete-job-title">Delete Job</h2>
      <ul className="job-list">
        {jobs.map((job) => (
          <li key={job._id} className="job-item">
            <span className="job-title">{job.title}</span>
            <button
              onClick={() => handleDelete(job._id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteJob;
