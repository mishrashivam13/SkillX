import { Link, useParams } from "react-router-dom";
import courses from "../Data/coursesData";
import { useState } from "react";
import AdmissionModal from "../Components/AdmissionModal";

export default function SingleCourse() {
  const { id } = useParams();
  const course = courses.find((c) => String(c.id) === String(id));

  const [tab, setTab] = useState("overview");

  if (!course) {
    return (
      <p className="text-center text-gray-600 py-20 text-xl">
        Course not found.
      </p>
    );
  }
    const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-5 py-12">

      {/* ================= HEADER ================= */}
      <div className="grid lg:grid-cols-[1fr_320px] gap-10">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900">
            {course.title}
          </h1>

          <div className="flex flex-wrap gap-5 mt-4 text-gray-600 text-sm">
            <span>⭐ 4.8 Rating</span>
            <span>⏳ Duration: {course.duration}</span>
            <span>📘 Level: {course.level}</span>
            <span>🧑‍💻 Mode: {course.mode}</span>
          </div>

          <img
            src={course.image}
            alt={course.title}
            className="w-full max-w-lg mt-8 rounded-lg shadow"
          />

          {/* ================= TABS ================= */}
          <div className="mt-12 border-b flex gap-6 overflow-x-auto">
            {["overview", "curriculum", "future", "faqs"].map((t) => (
              <button
                key={t}
                className={`pb-4 capitalize font-semibold text-sm transition ${
                  tab === t
                    ? "border-b-2 border-orange-500 text-orange-500"
                    : "text-gray-500 hover:text-orange-500"
                }`}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {/* ================= TAB CONTENT ================= */}
          <div className="mt-8">

            {/* ---------- OVERVIEW ---------- */}
            {tab === "overview" && (
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-medium">
                  {course.shortDescription}
                </p>
                <p className="whitespace-pre-line">{course.details}</p>
              </div>
            )}

            {/* ---------- CURRICULUM ---------- */}
            {tab === "curriculum" && (
              <ul className="grid sm:grid-cols-2 gap-3">
                {course.keyTopics.map((topic, i) => (
                  <li
                    key={i}
                    className="bg-slate-50 shadow-sm rounded-lg px-4 py-3 border text-gray-700 text-sm"
                  >
                    ✅ {topic}
                  </li>
                ))}
              </ul>
            )}

            {/* ---------- FUTURE SCOPE ---------- */}
            {tab === "future" && (
              <div className="space-y-4 text-gray-700">
                <p className="whitespace-pre-line">{course.futureScope}</p>

                {course.averageSalary && (
                  <p className="font-semibold text-orange-500">
                    💰 Expected Salary: {course.averageSalary}
                  </p>
                )}
              </div>
            )}

            {/* ---------- FAQs ---------- */}
            {tab === "faqs" && (
              <div className="space-y-5">
                <details className="bg-slate-50 p-4 shadow rounded-lg cursor-pointer">
                  <summary className="font-semibold">
                    What is the course duration?
                  </summary>
                  <p className="text-gray-600 mt-2">
                    {course.duration} including live projects.
                  </p>
                </details>

                <details className="bg-slate-50 p-4 shadow rounded-lg cursor-pointer">
                  <summary className="font-semibold">
                    Do I get a certificate?
                  </summary>
                  <p className="text-gray-600 mt-2">
                    Yes — industry-recognized certificate upon completion.
                  </p>
                </details>

                <details className="bg-slate-50 p-4 shadow rounded-lg cursor-pointer">
                  <summary className="font-semibold">
                    Online or Offline classes?
                  </summary>
                  <p className="text-gray-600 mt-2">{course.mode}</p>
                </details>
              </div>
            )}
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="bg-white shadow p-6 h-fit rounded-lg sticky top-24 border">

            

          <p className="text-gray-600 mt-2">
            Full course + Live projects + Certificate
          </p>

          {/* CALL COUNSELOR */}
          <a
            href="tel:+917852017051"
            className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md mt-6 text-lg text-center transition"
          >
            📞 Call Counselor
          </a>

          {/* APPLY */}
            <button 
        onClick={() => setShowModal(true)}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md mt-3 text-lg transition"
      >
        Enroll Now
      </button>

      <AdmissionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

        

          <div className="mt-6">
            <h4 className="font-semibold mb-2">
              Course Includes:
            </h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>✔ Live Doubt Sessions</li>
              <li>✔ Real Industry Projects</li>
              <li>✔ 100% Practical Training</li>
              <li>✔ Interview Preparation</li>
              <li>✔ Placement Assistance</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
