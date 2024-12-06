import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutus from "./Client/Pages/About-Us/Aboutus";
import Contactus from "./Client/Pages/Contact-Us/Contactus";
import Home from "./Client/Pages/Home/Home";
import JobInfo from "./Client/Pages/Job-Info/JobInfo";
import Jobs from "./Client/Pages/Jobs/Jobs";
import Signin from "./Client/Pages/Sign-In/Signin";
import Signup from "./Client/Pages/Sign-Up/Signup";
import NotFound from './Client/Pages/Error/NotFound';
import DashBoard from './Client/Pages/Admin/DashBoard';
import PrivateRoutes from './Client/Components/PrivateRoutes';
import UserProfile from './Client/Pages/Profile/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        {/* Auth */}
        <Route path='/Sign-in' element={<Signin />} />
        <Route path='/Sign-up' element={<Signup />} />
        {/* pages */}
        <Route path='/Jobs' element={<Jobs />} />
        <Route path='/JobInfo' element={<JobInfo />} />
        <Route path='/contactUs' element={<Contactus />} />
        <Route path='/aboutUs' element={<Aboutus />} />
        {/* Not Found */}
        <Route path='*' element={<NotFound />} />
        {/* DashBoard route */}
        <Route element={<PrivateRoutes />}>
        <Route path='/Dashboard' element={<DashBoard />} />
        <Route path='/Profile' element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
