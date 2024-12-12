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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* Auth */}
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        {/* Pages */}
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job-info" element={<JobInfo />} />
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
  );
}

  export default App;
