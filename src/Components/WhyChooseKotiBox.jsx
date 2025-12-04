// src/components/WhyChooseKotiBox.jsx
import React from "react";
import {
  Trophy,
  Rocket,
  Users,
  BookOpen,
  Layers,
  UserCheck,
} from "lucide-react";
import KOTIBOX_IMG from "../assets/ChatGPT Image Nov 25, 2025, 10_54_58 AM.png";

const CARD_CLASSES =
  "border-2 border-orange-300 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 bg-white";

const cardsData = [
  {
    id: 1,
    title: "Proven Track Record",
    text:
      "Join thousands of successful learners who have launched rewarding tech careers through KotiBox Skillx.",
    icon: <Trophy className="w-7 h-7 text-orange-500" />,
  },
  {
    id: 2,
    title: "Real-World Projects",
    text:
      "Gain practical exposure by working on live, industry-grade projects that mirror real business challenges.",
    icon: <Rocket className="w-7 h-7 text-orange-500" />,
  },
  {
    id: 3,
    title: "Expert Mentorship",
    text:
      "Learn from certified professionals with years of hands-on experience who guide you through the process.",
    icon: <Users className="w-7 h-7 text-orange-500" />,
  },
  {
    id: 4,
    title: "Complimentary Exam Preparation",
    text:
      "Boost your success with free exam preparation resources tailored to your training program.",
    icon: <BookOpen className="w-7 h-7 text-orange-500" />,
  },
  {
    id: 5,
    title: "Industry-Aligned Curriculum",
    text:
      "Master a curriculum crafted and constantly updated by industry experts to match real-world trends.",
    icon: <Layers className="w-7 h-7 text-orange-500" />,
  },
  {
    id: 6,
    title: "Personalized Career Support",
    text:
      "Receive one-on-one mentorship, resume reviews, mock interviews, and placement assistance.",
    icon: <UserCheck className="w-7 h-7 text-orange-500" />,
  },
];

export default function WhyChooseKotiBox({ imageSrc = KOTIBOX_IMG }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Why Choose <span className="text-orange-500">KotiBox Skillx</span>?
      </h2>
      <p className="text-gray-700 text-lg max-w-3xl mb-10">
        We don't just teach at KotiBox Skillx — we help people build meaningful,
        sustainable careers. Our training programs focus on the skills you need in the
        real world: hands-on projects, personalized guidance, and mentorship from industry
        professionals so you can confidently move forward in your tech journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* LEFT COLUMN: Image + Stats card (fills that empty space) */}
        <div className="md:row-span-2 flex flex-col gap-4 h-full">
          {/* Image */}
          <div className="rounded-xl overflow-hidden border-2 border-orange-300 shadow-sm">
            <img
              src={imageSrc}
              alt="KotiBox Skillx"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Stats / USP card under the image */}
          <div className="border border-orange-200 rounded-xl p-4 bg-orange-50/60">
            <p className="text-xs font-semibold text-orange-600 uppercase tracking-[0.15em] mb-3">
              Trusted Learning Partner
            </p>
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <div>
                <div className="text-xl font-bold text-gray-900">2500+</div>
                <div className="text-gray-600 text-xs">Students Trained</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600 text-xs">Job-Oriented Courses</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">90%</div>
                <div className="text-gray-600 text-xs">Placement Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Cards grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardsData.map((c) => (
            <article key={c.id} className={CARD_CLASSES}>
              <div className="flex items-start gap-4">
                <div className="flex-none">{c.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {c.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {c.text}
                  </p>
                  <div className="mt-3">
                    <a
                      href="#"
                      className="text-orange-500 text-sm font-medium inline-block mt-2 hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
