import React, { useState } from "react";
import axios from "axios";

const AddJob = () => {
  const [job, setJob] = useState({
    title: "",
    position: "",
    type: "",
    company: "",
    description: "",
    requirements: "",
    responsibilities: "",
    tags: "",
    location: "",
    skills: "",
    salary: "",
    timeadded: new Date().toISOString().slice(0, 16), 
  });

  const handleChange = (e) => {
    let value; 

    

   

      value = e.target.value;
    

    setJob({ ...job, [e.target.name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/job/addjob", job);
      alert("Job added successfully!");
      // Reset fields
      setJob({
        title: "",
        position: "",
        type: "",
        company: "",
        description: "",
        requirements: "",
        responsibilities: "",
        tags: "",
        location: "",
        skills: "",
        salary: "",
        timeadded: new Date().toISOString().slice(0, 16),
      });
    } catch (error) {
      console.error("Error adding job:", error.response?.data || error.message);
      alert(
        "Failed to add job: " + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={job.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="position"
          value={job.position}
          onChange={handleChange}
          placeholder="Job Position"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="type"
          value={job.type}
          onChange={handleChange}
          placeholder="Job Type"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="company"
          value={job.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          value={job.description}
          onChange={handleChange}
          placeholder="Job Description"
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <textarea
          name="requirements"
          value={job.requirements}
          onChange={handleChange}
          placeholder="Job Requirements"
          className="w-full p-2 border rounded"
        ></textarea>
        <textarea
          name="responsibilities"
          value={job.responsibilities}
          onChange={handleChange}
          placeholder="Job Responsibilities"
          className="w-full p-2 border rounded"
        ></textarea>
        <input
          type="text"
          name="tags"
          value={job.tags}
          onChange={handleChange}
          placeholder="Tags (comma-separated)"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="location"
          value={job.location}
          onChange={handleChange}
          placeholder="Job Location"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="skills"
          value={job.skills}
          onChange={handleChange}
          placeholder="Required Skills (comma-separated)"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="salary"
          value={job.salary}
          onChange={handleChange}
          placeholder="Salary"
          className="w-full p-2 border rounded"
        />
        <input
          type="datetime-local"
          name="timeadded"
          value={job.timeadded}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
