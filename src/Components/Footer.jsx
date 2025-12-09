// src/Components/Footer.jsx
import { Link } from "react-router-dom";
import Logo from "../assets/logoksx.png";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import courses from "../Data/coursesData";

// Fast lookup map
const courseTitleMap = Object.fromEntries(
  courses.map((c) => [c.title.toLowerCase(), c])
);

const getCourseByTitle = (displayTitle) => {
  const lower = displayTitle.toLowerCase().trim();

  const aliases = {
    "ui/ux design": "user experience design",
    "mobile app development (flutter)": "mobile app development",
    "generative ai": "generative ai",
    "business intelligence training": "business intelligence",
    "ethical hacking pro": "ethical hacking pro",
    "project management": "project management",
  };

  const key = aliases[lower] || lower;
  return courseTitleMap[key] || null;
};

// Courses lists
const popularCourses = [
  "MERN Stack Development",
  "Python Development",
  "Data Science",
  "Cybersecurity",
  "DevOps",
  "Mobile App Development (Flutter)",
  "Cloud Computing",
  "Digital Marketing",
];

const otherTopCourses = [
  "UI/UX Design",
  "Machine Learning",
  "Artificial Intelligence",
  "Generative AI",
  "Data Analysis",
  "Blockchain",
  "Business Intelligence",
  "Software Development",
  "Ethical Hacking Pro",
  "Project Management",
];

const jaipurCol1 = [
  "Best MERN Stack Development Training in Jaipur",
  "Best Python Development Training in Jaipur",
  "Best Data Science Training Course in Jaipur",
  "Best Cybersecurity Training Course in Jaipur",
];

const jaipurCol2 = [
  "Best DevOps Training Course in Jaipur",
  "Best Cloud Computing Training in Jaipur",
  "Best Digital Marketing Training Course in Jaipur",
  "Best Machine Learning Training Course in Jaipur",
];

const jaipurCol3 = [
  "Best Mobile App (Flutter) Training in Jaipur",
  "Best UI/UX Design Course in Jaipur",
  "Best Artificial Intelligence Training in Jaipur",
  "Best Generative AI Training in Jaipur",
];

const jaipurCol4 = [
  "Best Data Analysis Training in Jaipur",
  "Best Blockchain Training in Jaipur",
  "Best Business Intelligence Training in Jaipur",
  "Best Software Development Training in Jaipur",
];

const policies = [
  { label: "Contact Us", to: "/contact" },
  { label: "About Us", to: "/about" },
  { label: "Blogs", to: "/blogs" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const CourseLink = ({ title, children }) => {
    const course = getCourseByTitle(title);
    if (!course)
      return <span className="hover:text-white transition">{children}</span>;
    return (
      <Link
        to={`/course/${course.id}`}
        className="hover:text-white transition block"
      >
        {children}
      </Link>
    );
  };

  const JaipurLink = ({ text }) => {
    const keywordMap = {
      mern: "MERN Stack Development",
      python: "Python Development",
      "data science": "Data Science",
      cybersecurity: "Cybersecurity",
      ethical: "Ethical Hacking Pro",
      devops: "DevOps",
      cloud: "Cloud Computing",
      "digital marketing": "Digital Marketing",
      "machine learning": "Machine Learning",
      flutter: "Mobile App Development (Flutter)",
      "ui/ux": "UI/UX Design",
      "artificial intelligence": "Artificial Intelligence",
      "generative ai": "Generative AI",
      "data analysis": "Data Analysis",
      blockchain: "Blockchain",
      "business intelligence": "Business Intelligence",
      "software development": "Software Development",
    };

    const lower = text.toLowerCase();
    const matched = Object.keys(keywordMap).find((k) => lower.includes(k));
    const cleanTitle = matched ? keywordMap[matched] : null;
    const course = cleanTitle ? getCourseByTitle(cleanTitle) : null;

    if (!course) {
      return (
        <div className="pb-2 border-b border-dotted border-slate-600">
          {text}
        </div>
      );
    }

    return (
      <div className="pb-2 border-b border-dotted border-slate-600">
        <Link
          to={`/course/${course.id}`}
          className="hover:text-white transition"
        >
          {text}
        </Link>
      </div>
    );
  };

  return (
    <footer className="bg-[#242f4d] text-slate-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        {/* TOP 4 COLUMNS */}
        <div className="grid gap-10 md:grid-cols-4 mb-12">
          {/* 1) Popular Courses (NO logo here) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Our Popular Courses
            </h4>
            <ul className="space-y-2 text-sm">
              {popularCourses.map((c) => (
                <li key={c}>
                  <CourseLink title={c}>{c}</CourseLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 2) Other Top Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Other Top Courses
            </h4>
            <ul className="space-y-2 text-sm">
              {otherTopCourses.map((c) => (
                <li key={c}>
                  <CourseLink title={c}>{c}</CourseLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 3) Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Policies</h4>
            <ul className="space-y-2 text-sm">
              {policies.map((p) => (
                <li key={p.label}>
                  <Link to={p.to} className="hover:text-white transition">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4) Follow Us + Get updates + Logo + Powered by */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Follow Us!
            </h4>

            <div className="flex items-center gap-4 mb-5 text-[#ffcc00]">
              <a href="#" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/kotiboxskillx_academy"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            {/* Get updates text */}
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Get updates about new batches, workshops and placement results
              from KotiBoxSkillX Academy, Jaipur.
            </p>

            {/* ⬇️ Logo + Powered by moved HERE */}
            <div className="mt-4 flex items-center gap-4">
              <img
                src={Logo}
                alt="KotiBoxSkillX"
                className="h-16 w-auto object-contain"
              />
              <div className="leading-snug">
                <p className="text-[13px] text-slate-300">
                  Powered by:
                  <br />
                  <span className="font-semibold text-white">
                    KotiBox Global Technology (OPC) Pvt. Ltd. 
                  </span>
                 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* JAIPUR TRAINING STRIP */}
        <div className="border-t-2 border-b-2 border-[#ffcc00] py-3 text-center mb-10">
          <p className="text-white font-bold tracking-widest text-sm md:text-base">
            TRAINING IN JAIPUR
          </p>
        </div>

        {/* JAIPUR COURSES GRID */}
        <div className="grid gap-8 md:grid-cols-4 text-xs md:text-sm mb-12 text-slate-300">
          {[jaipurCol1, jaipurCol2, jaipurCol3, jaipurCol4].map((col, idx) => (
            <div key={idx} className="space-y-3">
              {col.map((text) => (
                <JaipurLink key={text} text={text} />
              ))}
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-700 text-xs text-slate-400">
          <p className="text-center md:text-left">
            Copyright © {year}{" "}
            <span className="font-bold text-white">
              KotiBoxSkillX Academy
            </span>
            , All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-600 hover:bg-white/10 transition"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
