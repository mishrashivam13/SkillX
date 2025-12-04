// src/Pages/TopCourseDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Layers,
  GraduationCap,
  CheckCircle2,
  Briefcase,
  Phone,
} from "lucide-react";
import courses from "../Data/coursesData";

const sxNavy = "#102A44";
const sxOrange = "#F28C3A";

export default function TopCourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => String(c.id) === String(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center space-y-4">
          <p className="text-xl font-semibold">Course not found.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-sm"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const topics = course.keyTopics || [];
  const duration = course.duration || "Duration not specified";

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* BG gradient + blobs */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <motion.div
        className="pointer-events-none absolute -top-32 -left-16 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${sxOrange}55, transparent 70%)`,
        }}
        animate={{ x: [-40, 60, -40], y: [0, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${sxNavy}aa, transparent 70%)`,
        }}
        animate={{ x: [40, -60, 40], y: [0, -40, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />

      {/* Top bar */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-md bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-3">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-100/80 hover:text-white px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <div className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Top Course Spotlight
          </div>
        </div>
      </header>

      {/* Main card */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(15,23,42,0.75)] overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1.8fr,1.2fr] gap-0">
            {/* LEFT SIDE – content */}
            <div className="p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
              {/* badges + title */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/40 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Top Course
                </span>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 border border-white/15 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100">
                  <Layers className="w-3 h-3" />
                  {course.category || "Technology"}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
                {course.title}
              </h1>

              <p className="mt-4 text-sm md:text-base text-slate-200/80 max-w-2xl">
                {course.shortDescription || course.desc}
              </p>

              {/* meta row */}
              <div className="mt-6 flex flex-wrap gap-3 text-xs md:text-sm text-slate-100/90">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 border border-white/10">
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>{duration}</span>
                </div>
                {course.level && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 border border-white/10">
                    <GraduationCap className="w-4 h-4 text-sky-300" />
                    <span>{course.level}</span>
                  </div>
                )}
                {course.mode && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>{course.mode} Batches</span>
                  </div>
                )}
              </div>

              {/* Overview */}
              <section className="mt-8 md:mt-10">
                <h2 className="text-lg md:text-xl font-semibold text-white mb-3">
                  Course Overview
                </h2>
                <p className="text-sm md:text-[15px] text-slate-200/90 leading-relaxed whitespace-pre-line">
                  {course.details ||
                    `This top course is designed to give you strong fundamentals and real-world skills so you can confidently work on projects and become job-ready.`}
                </p>
              </section>

              {/* Topics */}
              {topics.length > 0 && (
                <section className="mt-8">
                  <h3 className="text-sm font-semibold text-slate-100/90 mb-3 tracking-wide uppercase">
                    What you will master
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {topics.map((t, idx) => (
                      <motion.div
                        key={t}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * idx }}
                        className="flex items-start gap-2 text-xs md:text-sm text-slate-100/90"
                      >
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                        <span>{t}</span>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* Future scope */}
              <section className="mt-8 md:mt-10">
                <h2 className="text-lg md:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-amber-300" />
                  Career Opportunities & Future Scope
                </h2>
                <p className="text-sm md:text-[15px] text-slate-200/90 leading-relaxed whitespace-pre-line">
                  {course.futureScope ||
                    `After completing this course, you can apply for multiple roles in the industry. With strong projects and good interview prep, you can target better companies rather than only entry-level service work.`}
                </p>

                {course.averageSalary && (
                  <p className="mt-4 text-xs md:text-sm text-slate-300/90">
                    <span className="font-semibold text-amber-200">
                      Typical salary range:
                    </span>{" "}
                    {course.averageSalary}
                  </p>
                )}
              </section>
            </div>

            {/* RIGHT SIDE – summary + CTAs */}
            <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-6 bg-gradient-to-b from-slate-900/70 via-slate-950/60 to-slate-950">
              {/* summary card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.45 }}
                className="rounded-2xl border border-white/15 bg-black/30 p-5 md:p-6 shadow-[0_18px_50px_rgba(15,23,42,0.9)]"
              >
                <div className="flex items-center gap-4 mb-5">
                  {course.image && (
                    <div className="w-12 h-12 rounded-xl bg-slate-900/60 border border-white/15 flex items-center justify-center overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  )}
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
                      Course Snapshot
                    </p>
                    <p className="text-sm font-medium text-slate-100/90">
                      {course.title}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs md:text-sm text-slate-100/90">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Duration</span>
                    <span className="font-semibold text-amber-200">
                      {duration}
                    </span>
                  </div>
                  {course.level && (
                    <div className="flex justify-between">
                      <span className="text-slate-300">Level</span>
                      <span className="font-semibold">{course.level}</span>
                    </div>
                  )}
                  {course.mode && (
                    <div className="flex justify-between">
                      <span className="text-slate-300">Mode</span>
                      <span className="font-semibold">{course.mode}</span>
                    </div>
                  )}
                  {course.category && (
                    <div className="flex justify-between">
                      <span className="text-slate-300">Category</span>
                      <span className="font-semibold">
                        {course.category}
                      </span>
                    </div>
                  )}
                </div>

                <p className="mt-5 text-[11px] text-slate-400 leading-relaxed">
                  Live sessions • Mentor support • Practical projects •
                  Placement-focused training.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.45 }}
                className="space-y-3"
              >
                <a
                  href="tel:+917070905090"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/40 transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  Call Counselor Now
                </a>

                <button
                  onClick={() => navigate("/admission")}
                  className="w-full py-3 rounded-2xl font-semibold text-sm shadow-lg shadow-orange-400/30"
                  style={{
                    background: `linear-gradient(90deg, ${sxOrange}, "#ffb07a")`,
                    color: sxNavy,
                  }}
                >
                  Apply for Next Batch
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  No spam. Counselor tumhari current skills aur goal ke hisaab
                  se honest guidance dega.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
