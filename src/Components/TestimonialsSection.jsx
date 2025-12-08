// src/components/TestimonialsSection.jsx
import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image1 from "../assets/Testimonials/AvinashSir.jpg";

const testimonials = [
  {
    name: "Mohammad Saquib",
    text: "It's an ok institute in a good location. I joined this institute for Linux training. Our Linux trainer Mohammad Asif is doing great job to train us Linux.",
    image: Image1,
  },
  {
    name: "Jitendra Kumar",
    text: "I am Jitendra & taking coaching in .Net. Ducat is best coaching institute for .Net Technology & Aslam sir is also very good trainer for .Net.",
    image: Image1,
  },
  {
    name: "Jitendra Kumar",
    text: "I am Jitendra & taking coaching in .Net. Ducat is best coaching institute for .Net Technology & Aslam sir is also very good trainer for .Net.",
    image: Image1,
  },
  {
    name: "Jitendra Kumar",
    text: "I am Jitendra & taking coaching in .Net. Ducat is best coaching institute for .Net Technology & Aslam sir is also very good trainer for .Net.",
    image: Image1,
  },
  {
    name: "Aaquib",
    text: "Ducat is one of the best institute for learning any technology in NCR region. Here all the facilities are well experienced and have proper knowledge.",
    image: Image1,
  },
];

const AUTO_SLIDE_DELAY = 3500; // ms

const TestimonialsSection = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const scrollByCards = (direction = "next") => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(".testimonial-card");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width + 24;

    sliderRef.current.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });

    // If at end → reset back to start
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    if (scrollLeft + clientWidth >= scrollWidth - cardWidth) {
      setTimeout(() => {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }, 400);
    }
  };

  // ✅ Auto sliding
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      scrollByCards("next");
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-semibold text-slate-800">
              Testimonials
            </h2>
            <div className="mt-2 h-[3px] w-28 bg-orange-500" />
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollByCards("prev")}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full flex items-center justify-center
                         bg-orange-500 hover:bg-orange-600 active:scale-95
                         shadow-md hover:shadow-lg transition-all"
            >
              <ChevronLeft size={22} className="text-white" />
            </button>

            <button
              onClick={() => scrollByCards("next")}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full flex items-center justify-center
                         bg-orange-500 hover:bg-orange-600 active:scale-95
                         shadow-md hover:shadow-lg transition-all"
            >
              <ChevronRight size={22} className="text-white" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden pb-3"
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="testimonial-card min-w-[320px] md:min-w-[360px] 
                         bg-gradient-to-b from-[#cfe7ff] to-[#e4f1ff]
                         rounded-3xl shadow-md px-8 py-8
                         flex flex-col justify-between"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl text-orange-300 leading-none">
                  &ldquo;
                </span>
                <div className="w-20 h-20 rounded-full border-[4px] border-orange-500 overflow-hidden flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-[#004a8f]">
                  {t.name}
                </h3>
                <div className="mt-1 text-green-500 text-lg">★★★★★</div>
              </div>

              {/* Text */}
              <p className="text-[15px] leading-relaxed text-slate-800">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
