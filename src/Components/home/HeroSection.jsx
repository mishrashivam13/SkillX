// src/Components/home/HeroSection.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Image from "../../assets/SkillX.png";

/* Brand colors */
const sxNavy = "#102A44";
const sxOrange = "#F28C3A";

/* Data */
const heroSlides = [
  {
    title: "100% Placement Assistance",
    subtitle: "Live projects • Mentorship • Interview preparation & career guidance.",
  },
  {
    title: "Hands-On IT Training",
    highlight: "with Live Projects",
    subtitle: "Work on real-world tasks guided by experienced mentors.",
  },
  {
    title: "Launch Your IT Career",
    highlight: "From Beginner to Professional",
    subtitle: "Structured curriculum, hands-on practice, and supportive mentors.",
  },
];


export default function HeroSection({ onOpenAdmission }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      <div className="h-[80vh] md:h-screen text-white">
        {/* Background Image */}
        <div
          className="absolute md:fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Image})` }}
        />

        {/* Floating Orbs – disabled on mobile for performance */}
        <div className="fixed inset-0 -z-20 pointer-events-none opacity-30 hidden lg:block">
          <motion.div
            animate={{ x: [-120, 180, -120], y: [-100, 140, -100] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-64 h-64 lg:w-96 lg:h-96 rounded-full blur-2xl lg:blur-3xl"
            style={{
              background: `radial-gradient(circle, ${sxOrange}88, transparent 70%)`,
            }}
          />

          <motion.div
            animate={{ x: [120, -180, 120], y: [100, -140, 100] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-10 w-56 h-56 lg:w-80 lg:h-80 rounded-full blur-2xl lg:blur-3xl"
            style={{
              background: `radial-gradient(circle, ${sxNavy}cc, transparent 70%)`,
            }}
          />
        </div>

        {/* HERO SECTION CONTENT */}
        <section className="relative h-full flex items-center justify-center px-4 sm:px-6 pt-20 pb-10">
          {/* Static overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent -z-10" />

          <div className="max-w-6xl mx-auto text-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="min-h-[230px] sm:min-h-[260px] flex flex-col items-center justify-start"
              >
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full mb-6 sm:mb-8 backdrop-blur-xl border border-white/10"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <Shield
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ color: sxOrange }}
                  />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide">
                    Job-Focused IT Training • KotiBoxSkillX Academy
                  </span>
                </motion.div>

                {/* Title (height-stable, animated inside) */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight sm:leading-[1.15]">
                  {activeSlide.title.split(" ").map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden">
                      <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                        className="inline-block"
                      >
                        {word}&nbsp;
                      </motion.span>
                    </span>
                  ))}
                  {activeSlide.highlight && (
                    <>
                      <br />
                      <span
                        className="inline-block mt-2"
                        style={{
                          background: `linear-gradient(90deg, ${sxOrange}, #ff9a56)`,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        {activeSlide.highlight}
                      </span>
                    </>
                  )}
                </h1>

                {/* Subtitle */}
                <p className="mt-4 sm:mt-5 text-sm sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-2">
                  {activeSlide.subtitle}
                </p>

                {/* Social proof line */}
                <p className="mt-3 text-xs sm:text-sm text-gray-300">
                  Live + Recorded classes • Real projects • Interview preparation & doubt support
                </p>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                >
                  {/* Primary CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onOpenAdmission}
                    className="group relative px-7 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold sm:font-bold text-base sm:text-lg md:text-xl shadow-2xl overflow-hidden"
                    style={{
                      background: `linear-gradient(90deg, ${sxOrange}, #ff9a56)`,
                      color: sxNavy,
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center">
                      Enroll Now <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-120%" }}
                      whileHover={{ x: "120%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>

                  {/* Secondary CTA */}
                  <Link
                    to="/courses"
                    className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-white/40 text-sm sm:text-base text-white/90 hover:bg-white/10 transition"
                  >
                    View Courses
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Scroll hint (desktop only) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-xs text-gray-300">
              <span>Scroll to explore</span>
              <div className="w-[1px] h-6 bg-gray-400 animate-pulse" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
