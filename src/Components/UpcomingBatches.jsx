// src/Components/UpcomingBatches.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Mern from "../assets/wp8903890.jpg";
import Cyber from "../assets/Cyber.png";
import Aws from "../assets/AWS.png";
import Net from "../assets/NET-1.png";
import Java from "../assets/Java.png";

const BASE_BATCHES = [
  { id: "b1", title: "MERN STACK", branch: "Jaipur", start: "22-11-2025", image: Mern },
  { id: "b2", title: "AWS DevOps", branch: "Jaipur", start: "22-11-2025", image: Aws },
  { id: "b3", title: "CYBER SECURITY + GEN AI", branch: "Jaipur", start: "22-11-2025", image: Cyber },
  { id: "b4", title: ".NET FULL STACK", branch: "Jaipur", start: "22-11-2025", image: Net },
  { id: "b5", title: "Java Full Stack", branch: "Jaipur", start: "22-11-2025", image: Java },
];

export default function UpcomingBatches({ batches = BASE_BATCHES }) {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const duplicatedBatches = [...batches, ...batches]; // For seamless loop

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollPrev(scrollLeft > 0);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 50); // tolerance
  };

  useEffect(() => {
    const ref = carouselRef.current;
    if (ref) {
      checkScroll();
      ref.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        ref.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Upcoming Batches
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Secure your seat in the next cohort. Limited seats available!
          </p>
          <div className="mt-4 h-1 w-32 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto" />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 transition-all hover:scale-110 hover:shadow-xl hidden md:flex items-center justify-center ${
              !canScrollPrev ? "opacity-50 cursor-not-allowed" : "hover:bg-white"
            }`}
            aria-label="Previous batch"
          >
            <ChevronLeft className="w-6 h-6 text-slate-800" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 transition-all hover:scale-110 hover:shadow-xl hidden md:flex items-center justify-center ${
              !canScrollNext ? "opacity-50 cursor-not-allowed" : "hover:bg-white"
            }`}
            aria-label="Next batch"
          >
            <ChevronRight className="w-6 h-6 text-slate-800" />
          </button>

          {/* Scrollable Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-6 -mx-6 px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={checkScroll}
          >
            {duplicatedBatches.map((batch, index) => (
              <motion.article
                key={`${batch.id}-${index}`}
                className="flex-none w-80 snap-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl ring-8 ring-white/50">
                      <img
                        src={batch.image}
                        alt={batch.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 line-clamp-2">
                      {batch.title}
                    </h3>

                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        <span>{batch.branch}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-green-600" />
                        <span>Starts: {batch.start}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="tel:+917878058724"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full mt-5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now to Enroll
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Mobile Hint */}
        <p className="text-center text-sm text-slate-500 mt-6 md:hidden">
          ← Swipe to see more →
        </p>

        {/* Desktop Dots Indicator (Optional Enhancement) */}
        <div className="flex justify-center gap-2 mt-8">
          {batches.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-slate-300 transition-all duration-300"
              style={{
                backgroundColor: i === 0 ? "#f97316" : undefined,
                width: i === 0 ? "24px" : "8px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}