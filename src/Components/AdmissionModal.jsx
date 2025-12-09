// src/Components/AdmissionModal.jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X, CheckCircle2 } from "lucide-react";

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
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.name}! Our counselor will call you within 5 minutes.`
    );
    setFormData({ name: "", phone: "", email: "", course: "" });
    onClose();
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
            className="fixed inset-0 z-[1100] bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="
              fixed z-[1110]
              inset-3 sm:inset-6 md:inset-auto
              md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2
              w-auto max-w-5xl
              max-h-[95vh]
              overflow-y-auto
              rounded-3xl shadow-2xl
            "
          >
            <div className="bg-gradient-to-br from-slate-900 via-[#1a2332] to-[#242f4d] border border-white/10 rounded-3xl relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition backdrop-blur-sm"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="p-5 sm:p-6 md:p-8 lg:p-10">
                {/* Layout: stacked on mobile, split on md+ */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                  {/* LEFT: Offer Section */}
                  <div className="text-white flex flex-col justify-center space-y-5 sm:space-y-6 py-2 md:py-0">
                    <div className="flex items-center gap-3">
                      <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" />
                      <span className="text-base sm:text-lg md:text-xl font-bold text-orange-400">
                        100% Placement Assistance
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                      Reserve Your{" "}
                      <br className="hidden sm:block" />
                      Seat Today!
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md">
                      Limited seats. Get a call from our counselor in{" "}
                      <strong className="text-orange-400">5 minutes</strong>.
                    </p>

                    <ul className="space-y-3 text-gray-300">
                      {[
                        "Live Industry Projects",
                        "1:1 Personal Mentoring",
                        "Guaranteed Interview Calls",
                        "Certificate + Portfolio",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm sm:text-base"
                        >
                          <CheckCircle2 className="w-5 h-5 mt-0.5 text-emerald-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT: Form Section */}
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-7 border border-white/10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 text-center md:text-left">
                      Book Your Seat Now
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition text-sm sm:text-base"
                      />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition text-sm sm:text-base"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition text-sm sm:text-base"
                      />

                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition appearance-none cursor-pointer text-sm sm:text-base"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e")`,
                          backgroundPosition: "right 1.5rem center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "14px",
                        }}
                      >
                        <option value="" disabled className="bg-slate-900">
                          Choose Your Course
                        </option>
                        {realCourseOptions.map((course) => (
                          <option
                            key={course}
                            value={course}
                            className="bg-slate-900 text-white"
                          >
                            {course}
                          </option>
                        ))}
                      </select>

                      <button
                        type="submit"
                        className="w-full py-4 sm:py-5 rounded-xl font-black text-lg sm:text-xl text-slate-900 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 transform hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-2xl"
                      >
                        RESERVE MY SEAT NOW
                      </button>
                    </form>
                  </div>
                </div>

                {/* Mobile Bottom Note */}
                <p className="text-center text-[10px] sm:text-xs text-gray-500 mt-6 md:hidden">
                  Powered by KotiBox Global Technology (OPC) Pvt. Ltd.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
