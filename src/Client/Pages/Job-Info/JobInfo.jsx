import React from "react";
import { useParams } from "react-router-dom";
import {
  FiBriefcase,
  FiClock,
  FiMapPin,
  FiDollarSign,
  FiCalendar,
  FiBook,
} from "react-icons/fi";

const jobs = [
  {
    id: 1,
    title: "Corporate Solutions Executive",
    company: "Leffler and Sons",
    category: "Commerce",
    type: "Full time",
    salary: "$40000-$42000",
    location: "New-York, USA",
    description: "Lead corporate solutions and drive innovation.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Tech Corp",
    category: "Technology",
    type: "Full time",
    salary: "$60000-$80000",
    location: "San Francisco, USA",
    description: "Build and enhance the UI for web platforms.",
  },
  // Add more job objects as needed
];

function JobInfo() {
  const { id } = useParams();
  console.log(id);
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return <p className="text-red-500">Job not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
          <p className="text-gray-600 mb-4">{job.company}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <p>
              <strong>Category:</strong> {job.category}
            </p>
            <p>
              <strong>Type:</strong> {job.type}
            </p>
            <p>
              <strong>Salary:</strong> {job.salary}
            </p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
          </div>
          <h2 className="text-xl font-bold mb-2">Job Description</h2>
          <p className="text-gray-600">{job.description}</p>
        </div>
      </div>
    </div>
  );
}

export default JobInfo;
