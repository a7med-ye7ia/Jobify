import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Updatejob.css";

const UpdateJob = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

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

  const handleSelect = (job) => {
    setSelectedJob(job);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedJob({ ...selectedJob, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3000/job/updatejob/${selectedJob._id}`,
        selectedJob
      );
      alert("Job updated successfully!");
      fetchJobs();
      setSelectedJob(null);
    } catch (error) {
      console.error("Error updating job:", error);
      alert("Failed to update job");
    }
  };

  return (
    <div className="container">
      {!selectedJob ? (
        <ul className="job-list">
          {jobs.map((job) => (
            <li key={job._id} className="job-item">
              <span>
                {job.title} - {job.company}
              </span>
              <button
                onClick={() => handleSelect(job)}
                className="button-update"
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="title"
            value={selectedJob.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="input"
            required
          />
          <input
            type="text"
            name="position"
            value={selectedJob.position}
            onChange={handleChange}
            placeholder="Job Position"
            className="input"
            required
          />
          <input
            type="text"
            name="type"
            value={selectedJob.type}
            onChange={handleChange}
            placeholder="Job Type"
            className="input"
          />
          <input
            type="text"
            name="company"
            value={selectedJob.company}
            onChange={handleChange}
            placeholder="Company"
            className="input"
          />
          <textarea
            name="description"
            value={selectedJob.description}
            onChange={handleChange}
            placeholder="Job Description"
            className="textarea"
            required
          ></textarea>
          <textarea
            name="requirements"
            value={selectedJob.requirements}
            onChange={handleChange}
            placeholder="Job Requirements"
            className="textarea"
          ></textarea>
          <textarea
            name="responsibilities"
            value={selectedJob.responsibilities}
            onChange={handleChange}
            placeholder="Job Responsibilities"
            className="textarea"
          ></textarea>
          <input
            type="text"
            name="tags"
            value={selectedJob.tags}
            onChange={handleChange}
            placeholder="Tags (comma-separated)"
            className="input"
          />
          <input
            type="text"
            name="location"
            value={selectedJob.location}
            onChange={handleChange}
            placeholder="Job Location"
            className="input"
          />
          <input
            type="text"
            name="skills"
            value={selectedJob.skills}
            onChange={handleChange}
            placeholder="Required Skills (comma-separated)"
            className="input"
          />
          <input
            type="number"
            name="salary"
            value={selectedJob.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="input"
          />
          <div className="button-container">
            <button type="submit" className="button-submit">
              Update Job
            </button>
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="button-cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateJob;
