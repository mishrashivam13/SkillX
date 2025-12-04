// src/Components/AboutPage/StatsSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "./aboutAnimations";
import { useCountUp } from "./aboutHooks";

function AnimatedCounter({ end, duration = 2000, label, prefix = "", suffix = "" }) {
  const count = useCountUp(end, duration);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={fadeUp}
      className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"
        key={count}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </motion.div>
      <div className="mt-2 text-slate-600 font-medium text-sm md:text-base">
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-white/90">
            Real results that speak for our training quality
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCounter end={5000} label="Students Trained" suffix="+" />
          <AnimatedCounter end={120} label="Placements" suffix="+" />
          <AnimatedCounter end={25} label="Professional Courses" suffix="+" />
          <AnimatedCounter end={95} label="Placement Rate" suffix="%" />
        </div>
      </div>
    </section>
  );
}
