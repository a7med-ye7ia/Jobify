import React, { useState } from "react";
import axios from "axios";
import "./css/AddJob.css";

const AddJob = () => {
  const [job, setJob] = useState({
    title: "",
    position: "",
    type: "",
    company: "",
    description: "",
    requirements: "",
    tags: "",
    location: "",
    skills: "",
    salary: "",
    category: "", // إضافة حقل category
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setJob({ ...job, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/job/addjob", job);
      alert("Job added successfully!");
      setJob({
        title: "",
        position: "",
        type: "",
        company: "",
        description: "",
        requirements: "",
        tags: "",
        location: "",
        skills: "",
        salary: "",
        category: "", 
      });
    } catch (error) {
      console.error("Error adding job:", error.response?.data || error.message);
      alert(
        "Failed to add job: " + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="add-job-container">
      <h2 className="add-job-title">Add New Job</h2>
      <form onSubmit={handleSubmit} className="add-job-form">
        <div className="form-group">
          <label htmlFor="title">Job Title:</label>
          <input
            type="text"
            name="title"
            value={job.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Job Position:</label>
          <input
            type="text"
            name="position"
            value={job.position}
            onChange={handleChange}
            placeholder="Job Position"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Job Type:</label>
          <input
            type="text"
            name="type"
            value={job.type}
            onChange={handleChange}
            placeholder="Job Type"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={handleChange}
            placeholder="Company"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Job Description:</label>
          <textarea
            name="description"
            value={job.description}
            onChange={handleChange}
            placeholder="Job Description"
            className="form-textarea"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="requirements">Job Requirements:</label>
          <textarea
            name="requirements"
            value={job.requirements}
            onChange={handleChange}
            placeholder="Job Requirements"
            className="form-textarea"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags (comma-separated):</label>
          <input
            type="text"
            name="tags"
            value={job.tags}
            onChange={handleChange}
            placeholder="Tags (comma-separated)"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Job Location:</label>
          <input
            type="text"
            name="location"
            value={job.location}
            onChange={handleChange}
            placeholder="Job Location"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Required Skills (comma-separated):</label>
          <input
            type="text"
            name="skills"
            value={job.skills}
            onChange={handleChange}
            placeholder="Required Skills (comma-separated)"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            name="salary"
            value={job.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            value={job.category}
            onChange={handleChange}
            placeholder="Job Category"
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
