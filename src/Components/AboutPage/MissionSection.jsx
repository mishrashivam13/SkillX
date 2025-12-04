// src/Components/AboutPage/MissionSection.jsx
import React from "react";
import { motion } from "framer-motion";
import TestimonialCarousel from "./TestimonialCarousel";

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Kotibox SkillX Academy, we're on a mission to bridge the gap
              between academic education and industry requirements. We believe
              in transforming passionate learners into industry-ready
              professionals.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our vision is to become the most trusted IT training institute by
              delivering exceptional learning experiences and ensuring 100%
              career success for our students.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Industry-Aligned", "Project-Based", "Mentor-Driven", "Career-Focused"].map(
                (tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-semibold text-sm"
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <TestimonialCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
