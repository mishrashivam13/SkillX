// src/Pages/Home.jsx
"use client";

import React, { useState, useEffect } from "react";

import UpcomingBatches from "../Components/UpcomingBatches";
import CourseGrid from "../Components/CourseGrid";
import TestimonialsSection from "../Components/TestimonialsSection";
import ContactCallSection from "../Components/ContactCallSection";
import WhyChooseKotiBox from "../Components/WhyChooseKotiBox";
import FloatingIcons from "../Components/FloatingIcons";
import AdmissionModal from "../Components/AdmissionModal";

import courses from "../Data/coursesData";

import HeroSection from "../Components/home/HeroSection";
import PopularCoursesSection from "../Components/home/PopularCoursesSection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAdmission = () => setIsModalOpen(true);
  const handleCloseAdmission = () => setIsModalOpen(false);

  // 🔥 Auto-open modal after 10s, only once per user (using localStorage)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyShown = localStorage.getItem("admissionModalShown");
    if (alreadyShown) return; // don't show again

    const timer = setTimeout(() => {
      setIsModalOpen(true);
      localStorage.setItem("admissionModalShown", "true");
    }, 10000); // 10,000 ms = 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* HERO SECTION – still opens modal on button click */}
      <HeroSection onOpenAdmission={handleOpenAdmission} />

      {/* REST OF PAGE */}
      <div className="bg-white text-slate-900">
        <PopularCoursesSection courses={courses} />
        <UpcomingBatches />
        <CourseGrid courses={courses} />
        <TestimonialsSection />
        <ContactCallSection />
        <WhyChooseKotiBox />
        <FloatingIcons />
      </div>

      {/* Admission Modal */}
      <AdmissionModal isOpen={isModalOpen} onClose={handleCloseAdmission} />
    </>
  );
}
