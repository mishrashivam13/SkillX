import React from "react";
import PropTypes from "prop-types";

export default function CourseGrid({ courses = [] }) {
  const getLabel = (c) => {
    if (!c) return "";
    if (typeof c === "string") return c;
    return c.title || c.name || c.label || "";
  };

  // 🔹 Normalize + make them unique by id/label
  const normalized = courses.map((c, idx) =>
    typeof c === "string"
      ? { id: `str-${idx}`, title: c }
      : c
  );

  const uniqueCourses = Array.from(
    new Map(
      normalized.map((c, idx) => {
        const key = c.id ?? getLabel(c) ?? `idx-${idx}`;
        return [key, c];
      })
    ).values()
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            TOP COURSES
          </h3>
          <div className="mt-3 flex justify-center">
            <div
              className="w-32 h-1 rounded-md"
              style={{ background: "#F28C3A" }}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {uniqueCourses.map((course, idx) => {
            const label = getLabel(course) || `Course ${idx + 1}`;
            const key = course.id ?? label ?? `c-${idx}`;

            return (
              <button
                key={key}
                type="button"
                className="text-left w-full bg-white border rounded-md shadow-sm px-5 py-4 hover:shadow-lg transition-transform transform hover:-translate-y-1"
                onClick={() => {
                  console.log("clicked course:", label);
                  // yahan navigate(`/course/${course.id}`) bhi laga sakta hai
                }}
                aria-label={`Open course ${label}`}
              >
                <span className="text-[#0b5a86] font-semibold text-lg">
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

CourseGrid.propTypes = {
  courses: PropTypes.array,
};
