// src/Pages/Home.jsx
'use client';

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Shield, PlayCircle } from "lucide-react";

import CourseGrid from "../Components/CourseGrid";
import AdmissionModal from "../Components/AdmissionModal";
import ContactCallSection from '../Components/ContactCallSection';

import CourseCard from "../Components/CourseCard";
import courses from "../Data/coursesData";
import WhyChooseKotiBox from "../Components/WhyChooseKotiBox";
import UpcomingBatches from "../Components/UpcomingBatches";

/* Brand colors */
const sxNavy = "#102A44";
const sxOrange = "#F28C3A";

/* Data */
const heroSlides = [
  { title: "100% Job Guarantee", subtitle: "Live Projects • Mentorship • Placement Support" },
  { title: "Become a Full Stack Developer", highlight: "in Just 6 Months", subtitle: "Frontend + Backend + Cloud + Real Projects" },
  { title: "5000+ Students Placed", highlight: "₹12LPA Average Package", subtitle: "Join India's fastest growing IT institute" },
];

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <div className="relative overflow-x-hidden">
        <div className="min-h-screen text-white">
          <div
            className="fixed inset-0 -z-10"
            style={{ background: `linear-gradient(135deg, ${sxNavy} 0%, #0d2238 50%, #1a3555 100%)` }}
          />

          {/* Floating Orbs */}
          <div className="fixed inset-0 -z-20 pointer-events-none opacity-30">
            <motion.div
              animate={{ x: [-120, 180, -120], y: [-100, 140, -100] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
              style={{ background: `radial-gradient(circle, ${sxOrange}88, transparent 70%)` }}
            />

            <motion.div
              animate={{ x: [120, -180, 120], y: [100, -140, 100] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl"
              style={{ background: `radial-gradient(circle, ${sxNavy}cc, transparent 70%)` }}
            />
          </div>

          {/* HERO SECTION */}
          <section className="relative min-h-screen flex items-center justify-center px-6">

            {/* STATIC overlay (NO PARALLAX) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent -z-10" />

            <div className="max-w-7xl mx-auto text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -60 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full mb-10 backdrop-blur-xl border border-white/10"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <Shield className="w-6 h-6" style={{ color: sxOrange }} />
                    <span className="font-bold">100% PLACEMENT GUARANTEE</span>
                  </motion.div>

                  {/* Title */}
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
                    {heroSlides[currentSlide].title.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="inline-block"
                      >
                        {word}{" "}
                      </motion.span>
                    ))}
                    <br />
                    <span
                      style={{
                        background: `linear-gradient(90deg, ${sxOrange}, #ff9a56)`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {heroSlides[currentSlide].highlight}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                    {heroSlides[currentSlide].subtitle}
                  </p>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsModalOpen(true)}
                      className="group relative px-10 py-5 rounded-full font-bold text-xl shadow-2xl overflow-hidden"
                      style={{
                        background: `linear-gradient(90deg, ${sxOrange}, #ff9a56)`,
                        color: sxNavy,
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Enroll Now <Rocket className="w-7 h-7" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-120%" }}
                        whileHover={{ x: "120%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-10 py-5 rounded-full border-2 border-white/20 backdrop-blur-xl bg-white/6 flex items-center gap-4 hover:bg-white/12 transition"
                    >
                      <PlayCircle className="w-7 h-7" />
                      Watch Success Stories
                    </motion.button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      i === currentSlide ? "w-16" : "w-3"
                    }`}
                    style={{
                      background:
                        i === currentSlide ? sxOrange : "rgba(255,255,255,0.25)",
                    }}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* REST OF PAGE */}
      <div className="bg-white text-slate-900">

        {/* Popular courses */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold">
                <span
                  style={{
                    background: `linear-gradient(90deg, ${sxOrange}, #ff9a56)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Most Popular Courses
                </span>
              </h2>
              <p className="text-xl text-gray-600 mt-4">
                Updated every month • Built with top companies
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.slice(0, 6).map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -12 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <UpcomingBatches />
        <CourseGrid courses={courses} />
        <ContactCallSection />
        <WhyChooseKotiBox />
      </div>

      {/* Admission Modal */}
      <AdmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
