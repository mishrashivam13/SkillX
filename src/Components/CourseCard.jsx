import React from "react";
import { Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ ADD THIS

export default function CourseCard({
  course = {},
  theme = { navy: "#102A44", accent: "#F97316" },
}) {
  const fallback = "https://via.placeholder.com/400x260?text=Course";

  const {
    id,
    slug,
    title,
    image,
    shortDesc,
    duration,
    students,
    price,
    isTrending,
    isNew,
    level,
    category,
  } = course;

  const href = `/course/${id || slug || ""}`;

  return (
    <article
      className="
        group relative flex flex-col overflow-hidden
        rounded-2xl border border-slate-100
        bg-white shadow-sm
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
      "
      style={{
        minHeight: 260,
        boxShadow:
          "0 18px 40px rgba(15,23,42,0.06), 0 4px 10px rgba(15,23,42,0.04)",
      }}
    >
      {/* Top image */}
      <div className="relative h-40 w-full overflow-hidden bg-slate-50">
        <img
          src={image || fallback}
          alt={title}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

        <div className="absolute left-3 top-3 flex flex-wrap items-center gap-2">
          {category && (
            <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-700 backdrop-blur">
              {category}
            </span>
          )}
          {level && (
            <span className="rounded-full bg-slate-900/70 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white backdrop-blur">
              {level}
            </span>
          )}
        </div>

        {(isTrending || isNew) && (
          <div className="absolute right-3 top-3">
            <span className="rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm">
              {isTrending ? "Trending" : "New"}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
        <h4
          className="
            text-base sm:text-lg font-semibold
            text-slate-900
            line-clamp-2
            group-hover:text-slate-900
          "
          style={{ color: theme.navy }}
        >
          {title || "Untitled Course"}
        </h4>

        <p className="mt-1 text-xs sm:text-sm text-slate-600 line-clamp-2">
          {shortDesc ||
            "Practical course with real projects and placement support."}
        </p>

        <div className="mt-4 flex items-center justify-between text-[11px] sm:text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{duration || "6 months"}</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              <span>{students || "2500+ learners"}</span>
            </span>
          </div>

          <div className="text-right">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: theme.navy }}
            >
              {/* you can show price here if you want */}
            </p>
          </div>
        </div>

        <div className="mt-4 h-px w-full bg-slate-100" />

        {/* CTA row */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <Link
            to={href} // ✅ SPA navigation
            className="
              inline-flex items-center gap-2
              rounded-full border border-transparent
              bg-slate-900 text-white
              px-4 py-2
              text-xs sm:text-sm font-medium
              shadow-sm
              transition
              hover:bg-slate-800 hover:shadow-md
              focus:outline-none focus:ring-2 focus:ring-slate-900/40
            "
            style={{ background: theme.navy }}
          >
            <span>Explore course</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <div className="flex flex-col items-end text-[11px] text-slate-400">
            {students && (
              <span className="sm:hidden flex items-center gap-1">
                <Users className="h-3.5 w-3.5" /> {students}
              </span>
            )}
            <span className="mt-1 rounded-full bg-slate-50 px-2 py-1">
              Live + Recorded • Projects
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
