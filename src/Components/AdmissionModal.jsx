import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

const sxOrange = "#F28C3A";

export default function AdmissionModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const courseOptions = [
    "Full Stack",
    "AWS DevOps ",
    "Cyber Security ",
    ".NET Full Stack",
    "Data Science ",
    "Digital Marketing",
    "Game Development",
    "Python Programming",
    "Mobile App Development(Flutter)",
  ];

  // ✅ lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}! Our counsellor will call you soon.`);
    setFormData({ name: "", phone: "", email: "", course: "" });
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[1100] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed z-[1110] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl rounded-3xl  overflow-hidden"
          >
            <div className="bg-slate-900/95 border border-white/10 rounded-3xl p-8 grid md:grid-cols-2 gap-8">
              {/* Left */}
              <div className="text-white mt-10">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-orange-400" />
                  <span className="font-bold">100% Placement Guarantee</span>
                </div>

                <h3 className="text-4xl font-black mb-4">Reserve Your Seat</h3>

                <p className="text-gray-300 mb-4 ">
                  Limited seats. Our counsellor will call you in 5 minutes.
                </p>

                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>✅ Live Projects</li>
                  <li>✅ 1:1 Mentoring</li>
                  <li>✅ Job Assistance</li>
                </ul>
              </div>

              {/* Right form */}
              <form onSubmit={submitForm} className="space-y-4 mt-5">
                <input
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="field"
                />

                <input
                  required
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="field"
                />

                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="field"
                />
                <select
                  required
                  value={formData.course}
                  onChange={(e) =>
                    setFormData({ ...formData, course: e.target.value })
                  }
                  className="field select-scroll"
                >
                  <option value="">Choose Course</option>
                  {courseOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-lg bg-orange-400 text-slate-900 hover:opacity-90 transition"
                >
                  Reserve My Seat
                </button>
              </form>

              {/* close */}
              <button
                onClick={onClose}
                className="absolute top-1 right-4 w-10 h-10 bg-white/10 text-white rounded-full"
              >
                ✕
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
