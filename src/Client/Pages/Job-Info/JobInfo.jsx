import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FiBriefcase,
  FiClock,
  FiMapPin,
  FiDollarSign,
  FiCalendar,
  FiBook,
  FiTag,
} from "react-icons/fi";

function JobInfo() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

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
    return <p className="text-red-500">Loading job information...</p>;
  }

  const handleApply = () => {
    // Implement apply logic here
    console.log("Applying for job:", job.title);
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8 sm:p-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            {job.title}
          </h1>
          <p className="text-2xl text-green-600 mb-6">{job.position}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {job.tags &&
              job.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                >
                  <FiTag className="mr-2" />
                  {tag}
                </span>
              ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center text-lg">
              <FiBriefcase className="mr-3 text-green-600 text-xl" />
              <p>
                <strong className="text-green-700">Company:</strong>{" "}
                <span className="text-gray-700">{job.company}</span>
              </p>
            </div>
            <div className="flex items-center text-lg">
              <FiMapPin className="mr-3 text-green-600 text-xl" />
              <p>
                <strong className="text-green-700">Location:</strong>{" "}
                <span className="text-gray-700">{job.location}</span>
              </p>
            </div>
            <div className="flex items-center text-lg">
              <FiDollarSign className="mr-3 text-green-600 text-xl" />
              <p>
                <strong className="text-green-700">Salary:</strong>{" "}
                <span className="text-gray-700">{job.salary}</span>
              </p>
            </div>
            <div className="flex items-center text-lg">
              <FiCalendar className="mr-3 text-green-600 text-xl" />
              <p>
                <strong className="text-green-700">Posted:</strong>{" "}
                <span className="text-gray-700">
                  {new Date(job.timeadded).toLocaleDateString()}
                </span>
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Job Description
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            {job.description}
          </p>

          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Required Skills
          </h2>
          <ul className="list-none mb-8">
            {job.skills &&
              job.skills.map((skill, index) => (
                <li
                  key={index}
                  className="text-gray-700 mb-3 flex items-center text-lg"
                >
                  <FiBook className="mr-3 text-green-600 text-xl" />
                  {skill}
                </li>
              ))}
          </ul>

          <button
            onClick={handleApply}
            className="w-full md:w-auto px-8 py-4 bg-green-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-colors duration-200"
          >
            Apply for this job
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobInfo;
