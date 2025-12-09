// src/Components/AboutPage/FounderSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FOUNDER_IMG from "../../assets/sir.jpg";

const sxNavy = "#102A44";
const sxOrange = "#F28C3A";

export default function FounderSection() {
  const navigate = useNavigate();

  return (
    // 🔽 Less vertical padding
    <section className="py-12 md:py-14 bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-white rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.08)] border border-slate-100 overflow-hidden"
        >
          <div className="absolute -left-20 top-10 w-32 h-32 bg-orange-100/30 blur-3xl pointer-events-none" />
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-orange-200/20 blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-2">
            {/* LEFT: TEXT SIDE – reduced padding */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Founder’s Message
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-slate-900">
                From Our Founder
              </h3>

              <div className="relative mb-6">
                <span className="absolute -left-3 -top-3 text-4xl text-orange-200 leading-none select-none">
                  “
                </span>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed pl-4 border-l-4 border-orange-200">
                  I started <span className="font-semibold">KOTIBOX SkillX</span>{" "}
                  because I saw talented students struggle to get jobs. We don’t
                  just teach code — we design every program with{" "}
                  <span className="font-semibold">100% placement focus</span> so
                  that skills turn into real careers.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
                {[
                  { label: "Placed Candidates", value: "5000+" },
                  { label: "Hiring Companies", value: "120+" },
                  { label: "Highest Package", value: "₹28L" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-100 bg-slate-50/60 px-2.5 py-3 text-center shadow-sm"
                  >
                    <div
                      className="text-lg md:text-xl font-extrabold mb-1"
                      style={{
                        color: i === 0 || i === 2 ? sxOrange : sxNavy,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-[11px] text-gray-600 font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/admission")}
                className="inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full font-semibold text-sm md:text-base hover:scale-[1.03] active:scale-100 transition-transform shadow-md"
                style={{
                  background: `linear-gradient(90deg, ${sxOrange}, #ff9a56)`,
                  color: sxNavy,
                }}
              >
                Join the Next Batch Now
                <span className="text-lg translate-y-[1px]">↗</span>
              </button>

              <p className="mt-2 text-[11px] md:text-sm text-gray-500">
                Limited seats · Live mentor support · Job-oriented roadmap
              </p>
            </div>

            {/* RIGHT: IMAGE SIDE – reduced height */}
            <div className="relative overflow-hidden flex items-center justify-center bg-slate-100">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={FOUNDER_IMG}
                alt="Founder"
                className="
                  w-full
                  max-h-[320px]
                  md:max-h-[500px]
                  object-cover
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white">
                    Sachin Khandelwal
                  </h4>
                  <p
                    className="text-xs md:text-sm font-medium"
                    style={{ color: sxOrange }}
                  >
                    Founder & CEO, KOTIBOX SKILLX & <br /> KOTIBOX GLOBAL
                    TECHNOLOGIES
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[11px] md:text-sm text-slate-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Building careers in tech since 2014</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
      