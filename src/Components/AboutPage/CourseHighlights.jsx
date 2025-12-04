// src/Components/AboutPage/CourseHighlights.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, scaleIn } from "./aboutAnimations";

export default function CourseHighlights() {
  const courses = [
    {
      icon: "💻",
      title: "Full Stack Development",
      description: "Master MERN stack with real-world projects",
      duration: "6 Months",
      projects: "10+ Projects",
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
      description: "AWS, Azure & GCP certification training",
      duration: "4 Months",
      projects: "8+ Projects",
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Python, TensorFlow, and real AI applications",
      duration: "8 Months",
      projects: "12+ Projects",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "React Native & Flutter cross-platform apps",
      duration: "5 Months",
      projects: "6+ Projects",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Popular Courses
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Industry-designed curriculum with 100% practical approach
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                {course.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {course.title}
              </h3>
              <p className="text-slate-600 mb-4">{course.description}</p>
              <div className="flex justify-between text-sm text-slate-500">
                <span>📅 {course.duration}</span>
                <span>🛠️ {course.projects}</span>
              </div>

              <Link to="/courses">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-4 text-orange-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  Explore Course
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
