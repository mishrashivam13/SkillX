import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import ScrollToTop from "./Components/ScrollToTop";
import Loader from "./Components/Loader";
import Chatbot from "./Components/Chatbot";


// Lazy-loaded pages
const Home = lazy(() => import("./Pages/Home"));
const Courses = lazy(() => import("./Pages/Courses"));
const About = lazy(() => import("./Pages/About"));
const Blogs = lazy(() => import("./Pages/Blogs"));
const Contact = lazy(() => import("./Pages/Contact"));
const SingleCourse = lazy(() => import("./Pages/SingleCourse"));
const AdmissionForm = lazy(() => import("./Pages/AdmissionForm"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const BlogDetails = lazy(() => import("./Pages/BlogDetails"));


function App() {
  return (
    <Router>
      <ScrollToTop />

      <MainLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />

            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetails />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/course/:id" element={<SingleCourse />} />
            <Route path="/admission" element={<AdmissionForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </MainLayout>
          <Chatbot />
    </Router>
  );
}

export default App;
