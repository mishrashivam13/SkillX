import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "./aboutAnimations";
import { useCountUp } from "./aboutHooks";

const BRAND = "#ff6900";
const DARK = "#102A44";

const gridVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.4, ease: "easeOut" },
  },
};

function AnimatedCounter({
  end,
  duration = 2000,
  label,
  prefix = "",
  suffix = "",
}) {
  const count = useCountUp(end, duration);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      whileHover={{ scale: 1.03, y: -3 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="text-center p-6 md:p-7 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300"
    >
      <motion.div
        key={count}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="text-4xl md:text-5xl font-bold tracking-tight"
        style={{ color: BRAND }}
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
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: BRAND }}
    >
      {/* Subtle background shapes (solid, no gradients) */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-black/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/80 mb-3">
            KotiBoxSkillX in Numbers
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            Our Impact In Numbers
          </h2>

          <p className="text-sm md:text-lg text-white/90 max-w-2xl mx-auto">
            Real stats that show how KotiBoxSkillX Academy helps students move
            from{" "}
            <span className="font-semibold">
              classroom learning to real IT careers
            </span>
            .
          </p>
        </motion.div>

        {/* Inner white panel for better contrast */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-5 md:p-7">
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            <AnimatedCounter end={5000} suffix="+" label="Students Trained" />
            <AnimatedCounter end={120} suffix="+" label="Successful Placements" />
            <AnimatedCounter end={25} suffix="+" label="Professional Courses" />
            <AnimatedCounter end={95} suffix="%" label="Placement Support Satisfaction" />
          </motion.div>

          {/* Optional small note under counters */}
          <div className="mt-6 text-center text-[11px] md:text-xs text-white/80">
            Numbers are indicative and updated as new batches, placements and
            partnerships grow.
          </div>
        </div>
      </div>
    </section>
  );
}
