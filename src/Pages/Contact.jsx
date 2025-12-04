// src/Pages/Contact.jsx
import React, { useState, useEffect } from "react";

import HERO_IMAGE from '../assets/ChatGPT Image Nov 25, 2025, 10_54_58 AM.png'
const LOCAL_OVERLAY = "/mnt/data/A_high-resolution_photograph_showcases_a_modern_of.png";
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
    // small delay so transitions feel natural
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (dummy). Form values:\n" + JSON.stringify(form, null, 2));
  };

  const mapsQuery = encodeURIComponent("Jaipur, India");

  return (
    <>
      <section className="relative w-full overflow-hidden">
        {/* Hero background (image with dark overlay) */}
        <div
          className="w-full h-[420px] md:h-[480px] bg-center bg-cover relative"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        {/* Centered Card */}
        <div className="relative -mt-36 md:-mt-44 z-20 flex justify-center">
          <div
            // subtle fade + slide up on mount
            className={`w-[92%] max-w-[980px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl transform transition-all duration-700
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
            style={{ overflow: "visible" }}
          >
            {/* Header */}
            <div className="px-6 md:px-10 pt-10 pb-6 text-center">
              <h2
                className={`text-3xl md:text-4xl font-bold text-[#1f3e63] transform transition duration-600
                  ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              >
                Contact Us
              </h2>
              <p
                className={`mt-3 text-sm md:text-base text-[#6b8096] max-w-[860px] mx-auto transition-all duration-700
                  ${mounted ? "opacity-100" : "opacity-0"}`}
              >
                For further details, including questions and partnership opportunities,
                please email to:{" "}
                <strong className="text-[#0b355f]">info@Kotiboxskillx.com</strong> or
                use our contact form.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className={`px-6 md:px-10 pb-10 pt-2 transition-all duration-700 delay-100
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col text-sm">
                  <span className="text-xs font-semibold text-[#0b2338]">
                    Name<span className="text-red-500">*</span>
                  </span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="mt-2 h-11 px-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-shadow duration-200"
                    required
                  />
                </label>

                <label className="flex flex-col text-sm">
                  <span className="text-xs font-semibold text-[#0b2338]">
                    Email<span className="text-red-500">*</span>
                  </span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="mt-2 h-11 px-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-shadow duration-200"
                    required
                  />
                </label>

                <label className="flex flex-col text-sm">
                  <span className="text-xs font-semibold text-[#0b2338]">
                    Phone<span className="text-red-500">*</span>
                  </span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="mt-2 h-11 px-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-shadow duration-200"
                  />
                </label>

                <label className="flex flex-col text-sm">
                  <span className="text-xs font-semibold text-[#0b2338]">
                    Center<span className="text-red-500">*</span>
                  </span>
                  <select
                    name="center"
                    value={form.center}
                    onChange={handleChange}
                    className="mt-2 h-11 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white transition-shadow duration-200"
                  >
                    <option value="">Select Branch</option>
                    <option>Jaipur</option>
                  </select>
                </label>

                <label className="flex flex-col text-sm md:col-span-1">
                  <span className="text-xs font-semibold text-[#0b2338]">
                    Course<span className="text-red-500">*</span>
                  </span>
                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className="mt-2 h-11 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 bg-white transition-shadow duration-200"
                  >
                    <option value="">Select a Course</option>
                    <option>Full Stack</option>
                    <option>Data Science</option>
                    <option>UI/UX</option>
                  </select>
                </label>

                {/* Empty placeholder on larger screens to keep grid aligned */}
                <div className="hidden md:block" />
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="flex flex-col text-sm">
                  <span className="text-xs font-semibold text-[#0b2338]">
                    How can we help you?<span className="text-red-500">*</span>
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message..."
                    rows={6}
                    className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-shadow duration-200"
                  />
                </label>
              </div>

              {/* Submit button */}
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-3/4 lg:w-2/3 py-4 rounded-lg text-white font-semibold
                    bg-gradient-to-r from-[#2b2f5f] to-[#1f2546]
                    hover:from-[#1d234f] hover:to-[#3d2b66] transition-transform duration-200 shadow-md transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>



        {/* ---------- GOOGLE MAP (bottom) ---------- */}
        <div className="mt-12">
          {/* Container to position map and overlay image */}
          <div className="w-full flex justify-center">
            <div
              className={`w-full max-w-[1200px] h-[420px] md:h-[480px] relative rounded-t-none overflow-hidden transition-all duration-700
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              {/* responsive iframe embed */}
              <iframe
                title="KotiboxSkillX location"
                src={`https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>

              {/* small overlay image at bottom-right of the map using your uploaded local file */}
              <img
                src={LOCAL_OVERLAY}
                alt="overlay"
                className={`absolute right-4 bottom-4 w-20 h-20 md:w-28 md:h-28 rounded-full ring-4 ring-cyan-200 object-cover shadow-lg transition-transform duration-800
                  ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                style={{ transitionDelay: mounted ? "350ms" : "0ms" }}
              />
            </div>
          </div>
        </div>
      </section>
      <FloatingIcons />
    </>
  );
}
