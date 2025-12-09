import React from "react";
import logo from "../assets/kotibox.png"; // ✅ your brand logo

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white gap-4">

      {/* LOGO */}
      <img
        src={logo}
        alt="SkillX Logo"
        className="w-28 animate-pulse"
      />

      {/* SPINNER */}
      <div className="w-10 h-10 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>

      {/* TEXT */}
      <p className="text-xs text-gray-500 tracking-widest uppercase">
        Preparing your experience...
      </p>

      {/* DOTS */}
      <div className="flex gap-1">
        <span className="dot bounce delay-0"></span>
        <span className="dot bounce delay-150"></span>
        <span className="dot bounce delay-300"></span>
      </div>
    </div>
  );
}
