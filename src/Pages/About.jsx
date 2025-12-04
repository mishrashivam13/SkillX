// src/Pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

import ParticleBackground from "../Components/AboutPage/ParticleBackground";
import AboutHeader from "../Components/AboutPage/AboutHeader";
import MissionSection from "../Components/AboutPage/MissionSection";
import StatsSection from "../Components/AboutPage/StatsSection";
import FounderSection from "../Components/AboutPage/FounderSection";
import WhyChooseUs from "../Components/AboutPage/WhyChooseUs";
import CourseHighlights from "../Components/AboutPage/CourseHighlights";
import PlacementPartnersSection from "../Components/AboutPage/PlacementPartnersSection";
import FinalCTASection from "../Components/AboutPage/FinalCTASection";
import FloatingIcons from "../Components/FloatingIcons";

export default function About() {
  return (
    <div className="relative overflow-hidden bg-slate-50">
      <ParticleBackground />

      {/* Animated background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute left-10 top-1/4 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute right-10 bottom-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative">
        <AboutHeader />
        <MissionSection />
        <StatsSection />
        <FounderSection />
        <WhyChooseUs />
        <CourseHighlights />
        {/* <PlacementPartnersSection /> */}
        <FinalCTASection />
             {/* FLOATING CONTACT BUTTONS */}
      <FloatingIcons />
      </div>
    </div>
  );
}
