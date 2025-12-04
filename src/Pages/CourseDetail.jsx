import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Briefcase } from "lucide-react";
import courses from "../Data/coursesData";

const sxNavy = "#102A44";
const sxOrange = "#F28C3A";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-lg font-semibold text-slate-800">Course not found.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 rounded-full bg-slate-900 text-white text-sm"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header bar */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-lg md:text-2xl font-bold text-slate-900">
            {course.title}
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-[2fr,1fr] gap-10">
        {/* Left: Details */}
        <section>
          <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: sxNavy }}>
              Course Overview
            </h2>
            {course.details ? (
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {course.details}
              </p>
            ) : (
              <p className="text-slate-700 leading-relaxed">
                This course is designed to build strong fundamentals and hands-on
                experience so you can confidently work on real-world projects and
                become job-ready.
              </p>
            )}

            {course.keyTopics && course.keyTopics.length > 0 && (
              <>
                <h3 className="mt-8 mb-3 text-lg font-semibold text-slate-900">
                  What you will learn
                </h3>
                <ul className="space-y-2">
                  {course.keyTopics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Future scope / career benefits */}
          <div className="mt-8 bg-white rounded-2xl shadow-sm border p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: sxNavy }}>
              <Briefcase className="w-6 h-6" style={{ color: sxOrange }} />
              Career Opportunities & Future Scope
            </h2>

            {course.futureScope ? (
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {course.futureScope}
              </p>
            ) : (
              <p className="text-slate-700 leading-relaxed">
                After completing this course, you will be eligible for multiple entry-level
                and mid-level roles in the IT industry. With strong skills, good projects,
                and interview preparation, you can target product-based companies,
                startups, and MNCs.
              </p>
            )}

            {course.averageSalary && (
              <p className="mt-4 text-sm text-slate-600">
                <span className="font-semibold">Typical salary range:</span>{" "}
                {course.averageSalary}
              </p>
            )}

            <p className="mt-4 text-sm text-slate-600">
              Your growth will depend on your skills, consistency, projects, and how well
              you perform in interviews — but this course gives you a strong practical base
              to build on.
            </p>
          </div>
        </section>

        {/* Right: Info box / CTA */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-3" style={{ color: sxNavy }}>
              Course Summary
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {course.duration && (
                <li>
                  <span className="font-semibold">Duration: </span>
                  {course.duration}
                </li>
              )}
              {course.level && (
                <li>
                  <span className="font-semibold">Level: </span>
                  {course.level}
                </li>
              )}
              {course.mode && (
                <li>
                  <span className="font-semibold">Mode: </span>
                  {course.mode}
                </li>
              )}
            </ul>

            <button
              onClick={() => alert("You can open the admission modal or lead form from here.")}
              className="mt-6 w-full py-3 rounded-full font-semibold text-sm"
              style={{ background: `linear-gradient(90deg, ${sxOrange}, #ffb07a)`, color: sxNavy }}
            >
              Enroll / Talk to Counselor
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
