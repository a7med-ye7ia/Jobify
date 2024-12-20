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
    return <p className="text-red-500">Loading job information...</p>;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <img src={job.photo} alt="logo" />
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {job.title}
              </h1>
              <p className="text-lg text-slate-600">{job.company}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-slate-100 rounded-full">
                <FiBookmark className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {job.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700"
              >
                <FiTag className="w-4 h-4 mr-1" />
                {tag}
              </span>
              
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiBriefcase className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Company</p>
                <p className="font-medium text-slate-900">{job.company}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiMapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-medium text-slate-900">{job.location}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiDollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Salary</p>
                <p className="font-medium text-slate-900">{job.salary}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiCalendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Posted</p>
                <p className="font-medium text-slate-900">
                  {new Date(job.timeadded).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Job Description
            </h2>
            <p className="text-slate-600 leading-relaxed">{job.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Required Skills
            </h2>
            <div className="space-y-3">
              {job.skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FiBook className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-600">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FiSend className="w-5 h-5" />
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
