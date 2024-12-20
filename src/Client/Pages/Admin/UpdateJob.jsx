import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateJob = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [image, setImage] = useState(null); // حالة جديدة لتخزين الصورة

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
    setImage(null); // إعادة تعيين الصورة عند اختيار وظيفة جديدة
  };

  const handleChange = (e) => {
    let value;
    value = e.target.value;
    setSelectedJob({ ...selectedJob, [e.target.name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // تخزين الصورة بتنسيق Base64
      };
      reader.readAsDataURL(file); // قراءة الصورة وتحويلها إلى Base64
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // إضافة بيانات الوظيفة إلى FormData
    for (const key in selectedJob) {
      formData.append(key, selectedJob[key]);
    }

    // إضافة الصورة إذا كانت موجودة
    if (image) {
      formData.append("image", image); // هنا نضيف الصورة بتنسيق Base64
    }

    try {
      await axios.put(
        `http://localhost:3000/job/updatejob/${selectedJob._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Job updated successfully!");
      fetchJobs();
      setSelectedJob(null);
      setImage(null); // إعادة تعيين الصورة
    } catch (error) {
      console.error("Error updating job:", error);
      alert("Failed to update job");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Update Job</h2>
      {!selectedJob ? (
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li
              key={job._id}
              className="flex justify-between items-center border p-4 rounded"
            >
              <span>
                {job.title} - {job.company}
              </span>
              <button
                onClick={() => handleSelect(job)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={selectedJob.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="position"
            value={selectedJob.position}
            onChange={handleChange}
            placeholder="Job Position"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="type"
            value={selectedJob.type}
            onChange={handleChange}
            placeholder="Job Type"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="company"
            value={selectedJob.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            value={selectedJob.description}
            onChange={handleChange}
            placeholder="Job Description"
            className="w-full p-2 border rounded"
            required
          ></textarea>
          <textarea
            name="requirements"
            value={selectedJob.requirements}
            onChange={handleChange}
            placeholder="Job Requirements"
            className="w-full p-2 border rounded"
          ></textarea>
          <textarea
            name="responsibilities"
            value={selectedJob.responsibilities}
            onChange={handleChange}
            placeholder="Job Responsibilities"
            className="w-full p-2 border rounded"
          ></textarea>
          <input
            type="text"
            name="tags"
            value={selectedJob.tags}
            onChange={handleChange}
            placeholder="Tags (comma-separated)"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="location"
            value={selectedJob.location}
            onChange={handleChange}
            placeholder="Job Location"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="skills"
            value={selectedJob.skills}
            onChange={handleChange}
            placeholder="Required Skills (comma-separated)"
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="salary"
            value={selectedJob.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="w-full p-2 border rounded"
          />
          {/* حقل إدخال الصورة */}
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Update Job
            </button>
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
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
