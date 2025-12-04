// src/Components/AboutPage/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import desk from "../../assets/desk.jpg";
import { staggerContainer, fadeUp } from "./aboutAnimations";

export default function WhyChooseUs() {
  const features = [
    {
      icon: "🎯",
      title: "100% Placement Guarantee",
      description:
        "Get placed within 6 months of course completion or get 100% fee refund",
    },
    {
      icon: "👨‍🏫",
      title: "Industry Expert Mentors",
      description: "Learn from professionals working in top tech companies",
    },
    {
      icon: "💼",
      title: "Live Project Training",
      description: "Work on real client projects and build your portfolio",
    },
    {
      icon: "🏆",
      title: "Global Certifications",
      description:
        "Earn recognized certifications that add value to your resume",
    },
    {
      icon: "🤝",
      title: "1:1 Mentorship Sessions",
      description: "Personalized guidance and career counseling",
    },
    {
      icon: "📈",
      title: "Career Growth Support",
      description: "Lifetime access to job referrals and career guidance",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Why Choose Kotibox SkillX?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We don't just teach technology, we build careers with comprehensive
            support and industry connections
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200 group cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={desk}
              alt="Student Success"
              className="rounded-2xl shadow-2xl w-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg"
            >
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">Placement Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="absolute -bottom-4 -left-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg"
            >
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-sm">Student Rating</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
