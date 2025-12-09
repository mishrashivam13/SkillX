// src/Pages/Contact.jsx
import React, { useState, useEffect } from "react";
import HERO_IMAGE from '../assets/ChatGPT Image Nov 25, 2025, 10_54_58 AM.png';
import FloatingIcons from "../Components/FloatingIcons";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    center: "",
    course: "",
    message: "",
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Form values:\n" + JSON.stringify(form, null, 2));
  };

  const mapsQuery = encodeURIComponent("KotiBoxSkillX Academy Jaipur Rajasthan");

  // Only REAL courses from your coursesData.js – exact titles
  const realCourses = [
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
    "Robotics and Automation",
  ];

  return (
    <>
      <section className="relative w-full overflow-hidden">
        {/* Hero background */}
        <div
          className="w-full h-[420px] md:h-[480px] bg-center bg-cover relative"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Contact Card */}
        <div className="relative -mt-36 md:-mt-44 z-20 flex justify-center px-4">
          <div
            className={`w-full max-w-[980px] bg-white/96 backdrop-blur-md rounded-2xl shadow-2xl transition-all duration-800
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
          >
            <div className="px-6 md:px-10 pt-10 pb-6 text-center">
              <h2 className={`text-3xl md:text-4xl font-bold text-[#1f3e63] transition duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
                Contact Us
              </h2>
              <p className={`mt-4 text-sm md:text-base text-[#5a738b] max-w-3xl mx-auto transition-all duration-900 delay-200 ${mounted ? "opacity-100" : "opacity-0"}`}>
                Have questions about courses, batches, placements or partnerships?  
                Reach us at <strong className="text-[#0d1b2a]">info@kotiboxskillx.com</strong> or fill the form below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="px-6 md:px-10 pb-12 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <label className="flex flex-col">
                  <span className="text-xs font-semibold text-[#0b2338] mb-1">Name <span className="text-red-500">*</span></span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                  />
                </label>

                {/* Email */}
                <label className="flex flex-col">
                  <span className="text-xs font-semibold text-[#0b2338] mb-1">Email <span className="text-red-500">*</span></span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                  />
                </label>

                {/* Phone */}
                <label className="flex flex-col">
                  <span className="text-xs font-semibold text-[#0b2338] mb-1">Phone <span className="text-red-500">*</span></span>
                  <input
                    name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </label>

               

                {/* Center */}
                <label className="flex flex-col">
                  <span className="text-xs font-semibold text-[#0b2338] mb-1">Center <span className="text-red-500">*</span></span>
                  <select
                    name="center"
                    value={form.center}
                    onChange={handleChange}
                    className="h-12 px-4 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  >
                    <option value="">Select Branch</option>
                    <option value="jaipur">Jaipur</option>
                  </select>
                </label>

                {/* Course - ONLY REAL COURSES */}
                <label className="flex flex-col md:col-span-2">
                  <span className="text-xs font-semibold text-[#0b2338] mb-1">Interested Course <span className="text-red-500">*</span></span>
                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className="h-12 px-4 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  >
                    <option value="">Choose a Course</option>
                    {realCourses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="flex flex-col">
                  <span className="text-xs font-semibold text-[#0b2338] mb-1">
                    Message <span className="text-red-500">*</span>
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you today?"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                  />
                </label>
              </div>

              {/* Submit */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] hover:from-[#1e40af] hover:to-[#3b82f6] text-white font-bold text-lg rounded-xl shadow-lg transform hover:scale-105 active:scale-95 transition duration-300"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}>
              <iframe
                title="KotiBoxSkillX Academy Location"
                src={`https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`}
                className="w-full h-96 md:h-[500px] border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <FloatingIcons />
    </>
  );
}