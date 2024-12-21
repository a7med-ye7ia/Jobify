import React from "react";
import { FiX, FiUpload } from "react-icons/fi";

function UI({ isOpen, onClose, job, onSubmit }) {
  const [applicationData, setApplicationData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    cv: null,
    coverLetter: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setApplicationData((prev) => ({
      ...prev,
      cv: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", applicationData.fullName);
    formData.append("email", applicationData.email);
    formData.append("phone", applicationData.phone);
    formData.append("coverLetter", applicationData.coverLetter);
    if (applicationData.cv) {
      formData.append("cv", applicationData.cv);
    }
    formData.append("jobId", job.id);

    try {
      const response = await fetch("http://localhost:3000/job/apply", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Application submission failed");
      }

      const result = await response.json();
      alert("Application submitted successfully!");
      onClose();
    } catch (error) {
      console.error("Application error:", error);
      alert("Failed to submit application");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <FiX className="w-6 h-6" />
        </button>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Apply for {job.title}
          </h2>
          <p className="text-gray-600 mt-2">
            {job.company} - {job.location}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={applicationData.fullName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={applicationData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={applicationData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="cv" className="block text-gray-700 font-bold mb-2">
              CV
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FiUpload className="w-8 h-8 text-gray-500 mb-2" />
                  <p className="mb-2 text-sm text-gray-500">
                    {applicationData.cv
                      ? applicationData.cv.name
                      : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-xs text-gray-400">
                    PDF, DOC, DOCX (MAX. 5MB)
                  </p>
                </div>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
              </label>
            </div>
          </div>
          <div>
            <label
              htmlFor="coverLetter"
              className="block text-gray-700 font-bold mb-2"
            >
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={applicationData.coverLetter}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default UI;
