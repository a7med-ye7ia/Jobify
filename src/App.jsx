import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Client/Pages/Home/Home";
import Aboutus from "./Client/Pages/About-Us/Aboutus";
import Contactus from "./Client/Pages/Contact-Us/Contactus";
import JobInfo from "./Client/Pages/Job-Info/JobInfo";
import Jobs from "./Client/Pages/Jobs/Jobs";
import Signin from "./Client/Pages/Sign-In/Signin";
import Signup from "./Client/Pages/Sign-Up/Signup";
import NotFound from "./Client/Pages/Error/NotFound";
import DashBoard from "./Client/Pages/Admin/DashBoard";
import PrivateRoutes from "./Client/Components/PrivateRoute/PrivateRoutes";
import UserProfile from "./Client/Pages/Profile/UserProfile";
import Footer from "./Client/Components/Footer/Footer";
import { useEffect } from "react";
import { useState} from 'react';



const App =() =>{ 


  const [jobs, setJobs] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:3000/job/getjobs");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setJobs(data); 
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
    }
  };

  useEffect(() => {
    fetchNotes(); 
  }, []);  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* Auth */}
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        {/* Pages */}
        <Route path="/jobs" element={<Jobs jobs={jobs} />} /> 
        <Route path="/job-info/:id" element={<JobInfo />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/about-us" element={<Aboutus />} />
        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
        {/* Dashboard route */}
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
    // <div className="flex gap-4">
    //           <button
    //             onClick={() => setIsApplyModalOpen(true)}
    //             className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
    //           >
    //             <FiSend className="w-5 h-5" />
    //             Apply Now
    //           </button>
    //         </div>
  );
}

  export default App;
