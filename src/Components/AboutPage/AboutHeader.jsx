// src/Components/AboutPage/AboutHeader.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import officeBg from "../../assets/Aboutusbg.png";
import ParticleBackground from "./ParticleBackground";
import { useTypingEffect } from "./aboutHooks";

export default function AboutHeader() {
  const typedText = useTypingEffect("Kotibox SkillX Academy", 2000);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mt-[-60px] mb-20 rounded-3xl overflow-hidden h-[500px] md:h-[650px] flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover mt-15 bg-center bg-no-repeat h-full"
        style={{ backgroundImage: `url(${officeBg})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <ParticleBackground />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="inline-block mb-6"
        >
          <div className="text-white/90 text-sm md:text-base font-semibold bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            🚀 Transforming Careers Since 2025
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            {typedText}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium"
        >
          Empowering the next generation of IT professionals with
          industry-relevant skills, hands-on training, and guaranteed career
          success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/courses"
              className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              Explore Courses
            </Link>
          </motion.div>

        
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
