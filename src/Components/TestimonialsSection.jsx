// src/components/TestimonialsSection.jsx
import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image1 from "../assets/Testimonials/AvinashSir.jpg";
import Image2 from "../assets/Testimonials/Mangeet Sir.jpg";
import Image3 from "../assets/Testimonials/Jai.jpg";
import Image4 from "../assets/Testimonials/Digvijay.jpg";
import Image5 from "../assets/Testimonials/Devashish Sir.jpg";
import Image6 from "../assets/Testimonials/Kanahiya.jpg";
import Image7 from "../assets/Testimonials/Husain Sir.jpg";

const testimonials = [
  {
    name: "Avinash Shukla",
    role: "Project Manager",
    text:
      "I completed my training from KotiBoxSkillX Academy. The practical Linux and project-based guidance helped me move into a Project Manager role with confidence.",
    image: Image1,
  },
  {
    name: "Manjeet Meghawanshi",
    role: "MERN Stack Developer",
    text:
      "KotiBoxSkillX Academy’s MERN Stack training, live projects and mentoring gave me the skills I needed to crack my first MERN Stack Developer job.",
    image: Image2,
  },
  {
    name: "Jai Mathur",
    role: "Flutter Developer",
    text:
      "From basics to real-world mobile apps, the Flutter training at KotiBoxSkillX Academy was fully hands-on. That experience directly helped me get placed as a Flutter Developer.",
    image: Image3,
  },
  {
    name: "Digvijay Singh Rathore",
    role: "Flutter Developer",
    text:
      "The projects, doubt support and continuous practice at KotiBoxSkillX Academy built my confidence in Flutter and helped me start my career as a Flutter Developer.",
    image: Image4,
  },
  {
    name: "Devashish Soni",
    role: "Laravel Developer",
    text:
      "KotiBoxSkillX Academy gave me strong backend fundamentals in PHP & Laravel. Their placement support and interview preparation helped me secure a Laravel Developer role.",
    image: Image5,
  },
  {
    name: "Kanhaiya",
    role: "Web Designer",
    text:
      "UI/UX, responsive design and real client-style projects at KotiBoxSkillX Academy helped me move from just HTML/CSS to a full Web Designer role.",
    image: Image6,
  },
  {
    name: "Tajmeel Husain",
    role: "Laravel Developer",
    text:
      "The Laravel training at KotiBoxSkillX Academy was clear, practical and job-oriented. Because of that, I’m now working as a Laravel Developer.",
    image: Image7,
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

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    if (scrollLeft + clientWidth >= scrollWidth - cardWidth) {
      setTimeout(() => {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }, 400);
    }
  };

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
              Our Placed Students
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Trained at KotiBoxSkillX Academy • Now working in the industry
            </p>
            <div className="mt-2 h-[3px] w-32 bg-orange-500" />
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
        <div ref={sliderRef} className="flex gap-6 overflow-x-hidden pb-3">
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

              {/* Name + Role */}
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-[#004a8f]">
                  {t.name}
                </h3>
                <p className="text-sm text-slate-600">
                  {t.role} • KotiBoxSkillX Alumni
                </p>
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
