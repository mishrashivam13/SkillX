// src/Components/AboutPage/TestimonialCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function TestimonialCarousel({ className = "" }) {
  const slides = [
    {
      id: "video-1",
      type: "video",
      title: "Placement Drive Highlights",
      subtitle: "Watch our campus demo & student testimonials",
      src: "/mnt/data/Screen Recording 2025-11-21 171756.mp4",
      poster: "",
    },
    {
      id: "t-1",
      type: "text",
      title: "Tushar Srivastava",
      subtitle: "Placed at Vivo India P.Ltd.",
      text: "The training and live projects helped me build a strong portfolio. The mentors were always available for doubt-clearing.",
      avatar: "TS",
    },
    {
      id: "t-2",
      type: "text",
      title: "Prabhat Kumar",
      subtitle: "Placed at Paytel Financial Technologies",
      text: "Hands-on classes and interview preparation sessions gave me the confidence to crack the placement drive.",
      avatar: "PK",
    },
    {
      id: "t-3",
      type: "text",
      title: "Priya Sharma",
      subtitle: "Placed at Tech Mahindra",
      text: "The industry-relevant curriculum and mock interviews prepared me perfectly for real-world challenges.",
      avatar: "PS",
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoplayRef = useRef(null);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: false, margin: "-120px" });

  useEffect(() => {
    if (!inView || paused) return;
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [inView, paused, slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        <div className="relative h-80 md:h-96">
          <AnimatePresence mode="wait">
            {slides.map((slide, i) =>
              i === index ? (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center p-6"
                >
                  {slide.type === "video" ? (
                    <div className="w-full h-full rounded-xl overflow-hidden bg-black">
                      <video
                        src={slide.src}
                        controls
                        className="w-full h-full object-cover"
                        onPlay={() => setPaused(true)}
                        onPause={() => setPaused(false)}
                        onEnded={() => setPaused(false)}
                      />
                    </div>
                  ) : (
                    <div className="text-center max-w-4xl">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                      >
                        {slide.avatar}
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold text-slate-900 mb-2"
                      >
                        {slide.title}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-orange-500 font-semibold mb-4"
                      >
                        {slide.subtitle}
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-600 text-lg leading-relaxed"
                      >
                        {slide.text}
                      </motion.p>
                    </div>
                  )}
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-slate-700 group-hover:text-orange-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-slate-700 group-hover:text-orange-500 transition-colors"
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
          </button>
        </div>

        {/* Dots */}
        <div className="p-6 bg-slate-50 border-t border-slate-200">
          <div className="flex items-center justify-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-orange-500 w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
