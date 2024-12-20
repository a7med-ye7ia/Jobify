import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Delete Job</h2>
      <ul className="flex flex-wrap gap-4">
        {jobs.map((job) => (
          <li
            key={job._id}
            className="flex justify-between items-center border p-4 rounded w-64"
          >
            <span>
              {job.title}
            </span>
            <button
              onClick={() => handleDelete(job._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
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
