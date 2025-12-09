// src/Components/home/PopularCoursesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import CourseCard from "../CourseCard";

const sxOrange = "#F28C3A";

export default function PopularCoursesSection({ courses }) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
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
  );
}
