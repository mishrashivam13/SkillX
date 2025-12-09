// src/Components/AdmissionModal.jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X } from "lucide-react";

const sxOrange = "#F28C3A";

// Only REAL courses that actually exist in your academy
const realCourseOptions = [
  "MERN Stack Development",
  "Python Development",
  "Data Science",
  "Cybersecurity",
  "Ethical Hacking Pro",
  "DevOps",
  "Cloud Computing",
  "Digital Marketing",
  "Mobile App Development (Flutter)",
  "UI/UX Design",
  "Machine Learning",
  "Artificial Intelligence",
  "Generative AI",
  "Data Analysis",
  "Blockchain",
  "Business Intelligence",
  "Software Development",
  "Project Management",
  "Game Development",
];

export default function AdmissionModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Our counselor will call you within 5 minutes.`);
    setFormData({ name: "", phone: "", email: "", course: "" });
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[1100] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                       z-[1110] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="bg-gradient-to-br from-slate-900 via-[#1a2332] to-[#242f4d] border border-white/10 rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-8 relative">
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Left Side - Offer */}
              <div className="flex flex-col justify-center text-white">
                <div className="flex items-center gap-3 mb-5">
                  <Shield className="w-8 h-8 text-orange-400" />
                  <span className="text-lg font-bold text-orange-400">100% Placement Assistance</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                  Reserve Your<br />Seat Today!
                </h2>

                <p className="text-gray-300 text-lg mb-6">
                  Limited seats available. Get a call from our counselor in <strong className="text-orange-400">5 minutes</strong>.
                </p>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3"><span className="text-green-400 text-xl">Check</span> Live Industry Projects</li>
                  <li className="flex items-center gap-3"><span className="text-green-400 text-xl">Check</span> 1:1 Personal Mentoring</li>
                  <li className="flex items-center gap-3"><span className="text-green-400 text-xl">Check</span> Guaranteed Interview Calls</li>
                  <li className="flex items-center gap-3"><span className="text-green-400 text-xl">Check</span> Certificate + Portfolio</li>
                </ul>
              </div>

              {/* Right Side - Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e")`, backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat", backgroundSize: "12px" }}
                >
                  <option value="" disabled className="bg-slate-800">Choose Your Course</option>
                  {realCourseOptions.map((course) => (
                    <option key={course} value={course} className="bg-slate-800 text-white py-2">
                      {course}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="w-full py-5 rounded-xl font-bold text-xl font-black text-slate-900 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 transform hover:scale-105 active:scale-95 transition duration-300 shadow-xl"
                >
                  RESERVE MY SEAT NOW
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}