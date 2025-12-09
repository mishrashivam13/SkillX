"use client";

import React, { useState } from "react";

import UpcomingBatches from "../Components/UpcomingBatches";
import CourseGrid from "../Components/CourseGrid";
import TestimonialsSection from "../Components/TestimonialsSection";
import ContactCallSection from "../Components/ContactCallSection";
import WhyChooseKotiBox from "../Components/WhyChooseKotiBox";
import FloatingIcons from "../Components/FloatingIcons";
import AdmissionModal from "../Components/AdmissionModal";

import courses from "../Data/coursesData";

// NEW components
import HeroSection from "../Components/home/HeroSection";
import PopularCoursesSection from "../Components/home/PopularCoursesSection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAdmission = () => setIsModalOpen(true);
  const handleCloseAdmission = () => setIsModalOpen(false);

  return (
    <>
      {/* HERO SECTION */}
      <HeroSection onOpenAdmission={handleOpenAdmission} />

      {/* REST OF PAGE */}
      <div className="bg-white text-slate-900">
        {/* Popular Courses */}
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
