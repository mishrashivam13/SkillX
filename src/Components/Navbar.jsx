// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Phone,
  User,
} from "lucide-react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import AdmissionModal from "./AdmissionModal";

// Logo
import LOGO from "../assets/kotibox.png";

// Brand Colors
const sxNavy = "#102A44";
const sxOrange = "#F28C3A";

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [coursesOpen, setCoursesOpen] = useState(false); // courses dropdown
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const popularCourses = [
    { name: "MERN Stack + Gen AI", badge: "Hot" },
    { name: "Java Full Stack", badge: "Trending" },
    { name: "Data Science Pro", badge: "New" },
    { name: "UI/UX Masterclass", badge: null },
  ];

  // Close dropdown on outside click or ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setCoursesOpen(false);
        setOpen(false);
      }
    };
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* HEADER */}
      <header
        className="sticky top-0 z-[900] bg-white lg:bg-white/90 lg:backdrop-blur-2xl border-b border-slate-200/30 shadow"
      >
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-4 group"
            aria-label="KOTIBOX SkillX home"
          >
            <div className="relative">
              <img
                src={LOGO}
                alt="KOTIBOX SkillX"
                className="h-14 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center">
            {navLinks.map((link) => {
              if (link.name === "Courses") {
                return (
                  <div key="courses" className="relative" ref={dropdownRef}>
                    <button
                      onMouseEnter={() => setCoursesOpen(true)}
                      className="flex items-center gap-2 font-bold text-slate-800 hover:text-orange-600 transition"
                      aria-haspopup="true"
                      aria-expanded={coursesOpen}
                    >
                      Courses
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          coursesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {coursesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          onMouseEnter={() => setCoursesOpen(true)}
                          onMouseLeave={() => setCoursesOpen(false)}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-96 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden"
                          role="menu"
                        >
                          <div
                            className="p-6"
                            style={{
                              background: `linear-gradient(135deg, ${sxOrange}10, ${sxNavy}10)`,
                            }}
                          >
                            <h3
                              className="text-xl font-bold"
                              style={{ color: sxNavy }}
                            >
                              Popular Courses 2025
                            </h3>
                            <p className="text-sm text-slate-600 mt-1">
                              100% Placement Guarantee
                            </p>
                          </div>

                          <div className="p-4 space-y-3">
                            {popularCourses.map((course) => (
                              <button
                                key={course.name}
                                onClick={() => {
                                  navigate("/courses");
                                  setCoursesOpen(false);
                                }}
                                className="w-full text-left p-4 rounded-2xl hover:bg-orange-50 transition flex items-center justify-between group"
                                role="menuitem"
                              >
                                <div>
                                  <p className="font-semibold text-slate-800 group-hover:text-orange-600">
                                    {course.name}
                                  </p>
                                  <p className="text-xs text-slate-500">
                                    Live Projects • Mentor Support
                                  </p>
                                </div>
                                {course.badge && (
                                  <span
                                    className={`px-3 py-1 text-xs font-bold rounded-full ${
                                      course.badge === "Hot"
                                        ? "bg-red-100 text-red-700"
                                        : course.badge === "Trending"
                                        ? "bg-purple-100 text-purple-700"
                                        : "bg-emerald-100 text-emerald-700"
                                    }`}
                                  >
                                    {course.badge}
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>

                          <div className="px-6 py-4 bg-slate-50 border-t">
                            <Link
                              to="/courses"
                              onClick={() => setCoursesOpen(false)}
                              className="text-orange-600 font-bold text-lg hover:underline"
                            >
                              View All Courses →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-bold transition ${
                      isActive
                        ? "text-orange-600"
                        : "text-slate-700 hover:text-orange-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 font-medium transition"
            >
              <User size={18} /> Login
            </Link>

            {/* Desktop Enroll */}
            <button
              onClick={openModal}
              className="hidden md:block px-8 py-3.5 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300 text-white"
              style={{
                background: `linear-gradient(90deg, ${sxOrange}, #ff9a56)`,
              }}
            >
              Enroll Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-3 rounded-full bg-orange-100 text-orange-600"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="fixed inset-0 z-[900] bg-white lg:hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-200">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4"
                >
                  <img
                    src={LOGO}
                    alt="KOTIBOX SkillX"
                    className="h-12 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="p-3 bg-slate-100 rounded-full"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="p-8 space-y-8 bg-white">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="block text-3xl font-bold text-slate-900 hover:text-orange-600 transition"
                  >
                    {link.name}
                  </NavLink>
                ))}

                <button
                  onClick={() => {
                    openModal();
                    setOpen(false);
                  }}
                  className="w-full py-5 text-xl font-bold text-white rounded-3xl shadow-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${sxOrange}, #ff9a56)`,
                  }}
                >
                  Enroll Now
                </button>

                <div className="text-center pt-6">
                  <a
                    href="tel:+917852017051"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold"
                  >
                    <Phone size={24} /> Talk to Counselor
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Admission modal */}
      <AdmissionModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
