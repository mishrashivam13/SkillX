import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";

import Home from "./Pages/Home";


import Courses from "./Pages/Courses";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import SingleCourse from "./Pages/SingleCourse";
import AdmissionForm from "./Pages/AdmissionForm";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UpcomingBatches from "./Components/UpcomingBatches";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  return (
    <Router>
     <ScrollToTop />
      <MainLayout>
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course/:id" element={<SingleCourse />} />
          <Route path="/admission" element={<AdmissionForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </MainLayout>
    </Router>
  );
}

export default App;
