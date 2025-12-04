// src/Pages/Home.jsx
'use client';

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Rocket, Shield, Trophy, Users, CheckCircle2, PlayCircle, Calendar } from "lucide-react";

import CourseGrid from "../Components/CourseGrid";
import AdmissionModal from "../Components/AdmissionModal";
import ContactCallSection from '../Components/ContactCallSection'


import CourseCard from "../Components/CourseCard";
import courses from "../Data/coursesData";
import FOUNDER_IMG from "../assets/sir.jpg";
import WhyChooseKotiBox from "../Components/WhyChooseKotiBox";
import UpcomingBatches from "../Components/UpcomingBatches";
import PlacementPartners from "../Components/PlacementPartners";

/* Brand colors */
const sxNavy = "#102A44";
const sxOrange = "#F28C3A";

/* Data */
const heroSlides = [
  { title: "100% Job Guarantee", subtitle: "Live Projects • Mentorship • Placement Support" },
  { title: "Become a Full Stack Developer", highlight: "in Just 6 Months", subtitle: "Frontend + Backend + Cloud + Real Projects" },
  { title: "5000+ Students Placed", highlight: "₹12LPA Average Package", subtitle: "Join India's fastest growing IT institute" },
];

const batches = [
  { id: "b1", title: "PHP FULL STACK", start: "22 Nov 2025", seats: 8 },
  { id: "b2", title: "AWS DevOps Pro", start: "22 Nov 2025", seats: 5 },
  { id: "b3", title: "Cyber Security + Gen AI", start: "18 Dec 2025", seats: 12 },
  { id: "b4", title: ".NET FULL STACK", start: "05 Dec 2025", seats: 10 },
  { id: "b5", title: "Data Science Pro", start: "12 Dec 2025", seats: 6 },
  { id: "b6", title: "React + Node.js Master", start: "01 Dec 2025", seats: 7 },
];

/* Path to uploaded illustration (used in contact section) */


export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO (keep current dark/navy styling) */}
      <div className="relative overflow-x-hidden">
        <div className="min-h-screen text-white">
          <div
            className="fixed inset-0 -z-10"
            style={{ background: `linear-gradient(135deg, ${sxNavy} 0%, #0d2238 50%, #1a3555 100%)` }}
          />

          {/* Floating orbs */}
          <div className="fixed inset-0 -z-20 pointer-events-none opacity-30">
            <motion.div animate={{ x: [-120, 180, -120], y: [-100, 140, -100] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${sxOrange}88, transparent 70%)` }} />
            <motion.div animate={{ x: [120, -180, 120], y: [100, -140, 100] }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${sxNavy}cc, transparent 70%)` }} />
          </div>

          {/* HERO */}
          <section className="relative min-h-screen flex items-center justify-center px-6">
            <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent -z-10" />

            <div className="max-w-7xl mx-auto text-center">
              <AnimatePresence mode="wait">
                <motion.div key={currentSlide} initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -60 }} transition={{ duration: 0.8 }}>
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="inline-flex items-center gap-3 px-8 py-4 rounded-full mb-10 backdrop-blur-xl border border-white/10" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <Shield className="w-6 h-6" style={{ color: sxOrange }} />
                    <span className=" font-bold">100% PLACEMENT GUARANTEE  </span>
                  </motion.div>

                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
                    {heroSlides[currentSlide].title.split(" ").map((word, i) => (
                      <motion.span key={i} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="inline-block">
                        {word}{" "}
                      </motion.span>
                    ))}
                    <br />
                    <span style={{ background: `linear-gradient(90deg, ${sxOrange}, #ff9a56)`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      {heroSlides[currentSlide].highlight}
                    </span>
                  </h1>

                  <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">{heroSlides[currentSlide].subtitle}</p>

                  <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} onClick={() => setIsModalOpen(true)} className="group relative px-10 py-5 rounded-full font-bold text-xl shadow-2xl overflow-hidden" style={{ background: `linear-gradient(90deg, ${sxOrange}, #ff9a56)`, color: sxNavy }}>
                      <span className="relative z-10 flex items-center gap-3">Enroll Now <Rocket className="w-7 h-7" /></span>
                      <motion.div className="absolute inset-0 bg-white/20" initial={{ x: "-120%" }} whileHover={{ x: "120%" }} transition={{ duration: 0.6 }} />
                    </motion.button>

                    <motion.button whileHover={{ scale: 1.05 }} className="px-10 py-5 rounded-full border-2 border-white/20 backdrop-blur-xl bg-white/6 flex items-center gap-4 hover:bg-white/12 transition">
                      <PlayCircle className="w-7 h-7" /> Watch Success Stories
                    </motion.button>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
                     
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                {heroSlides.map((_, i) => (
                  <button key={i} onClick={() => setCurrentSlide(i)} className={`h-3 rounded-full transition-all duration-300 ${i === currentSlide ? "w-16" : "w-3"}`} style={{ background: i === currentSlide ? sxOrange : "rgba(255,255,255,0.25)" }} aria-label={`Go to slide ${i + 1}`} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>


      {/* REST OF PAGE: WHITE BACKGROUND + dark text */}
      <div className="bg-white text-slate-900">
        {/* Popular courses */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-extrabold">
                <span style={{ background: `linear-gradient(90deg, ${sxOrange}, #ff9a56)`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Most Popular Courses
                </span>
              </h2>
              <p className="text-xl text-gray-600 mt-4">Updated every month • Built with top companies</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.slice(0, 6).map((course, i) => (
                <motion.div key={course.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -12 }}>
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming batches */}
       <UpcomingBatches />

              {/* ---------------------- Contact/Call Section Inserted Here ---------------------- */}
      
{/* Contact / Call section */}


{/* Top Courses grid (matches the screenshot) */}
<CourseGrid courses={courses} />
{/* <PlacementPartners /> */}
<ContactCallSection />
<WhyChooseKotiBox />


        {/* Founder section */}



      </div>

      {/* Admission Modal (unchanged) */}
      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
           {/* FLOATING CONTACT BUTTONS */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {/* Phone */}
        <a
          href="tel:+917852017051
"
          className="group w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-blue-700 transition-all duration-300"
          title="Call Us"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/917852017051
"
          target="_blank"
          rel="noreferrer"
          className="group w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-green-600 transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.985z"/>
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:info@skillx.com"
          className="group w-14 h-14 bg-orange-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-orange-600 transition-all duration-300"
          title="Send Email"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </>
  );
}

/* ContactCallSection - inserted into Home */



