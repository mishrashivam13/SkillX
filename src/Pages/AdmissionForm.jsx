// src/components/AdmissionModal.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from '../assets/kotibox_global_technologies_cover.jpeg';

export default function AdmissionModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", course: "", mode: "", address: "", message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    "Full Stack Development", "UI/UX Design", "Machine Learning",
    "Data Science", "Cloud Computing", "Cyber Security", "PHP Full Stack", ".NET Full Stack", "AWS DevOps", "Cyber Security + Gen AI"
  ];

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name required";
    if (!formData.email.trim()) e.email = "Email required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = "Invalid email";
    if (!formData.phone.trim()) e.phone = "Phone required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) e.phone = "Invalid phone";
    if (!formData.course) e.course = "Select course";
    if (!formData.mode) e.mode = "Select mode";
    if (!formData.address.trim()) e.address = "Address required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", course: "", mode: "", address: "", message: "" });
      onClose(); // Close modal after success
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 overflow-y-auto"
          >
            <div className="min-h-full flex items-center justify-center p-4">
              <div className="w-full max-w-7xl bg-gradient-to-br from-slate-950 via-purple-950 to-orange-950 rounded-3xl shadow-4xl overflow-hidden border border-white/20">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/20 transition"
                >
                  <span className="text-3xl text-white">×</span>
                </button>

                {/* Background Blobs */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600/30 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-700/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
                </div>

                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Panel */}
                  <div className="p-10 lg:p-16 text-white flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full text-sm font-bold inline-block mb-6">
                        Admissions Open • Limited Seats
                      </span>

                      <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                        Launch Your<br />
                        <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                          Tech Career
                        </span>
                      </h1>

                      <p className="text-xl text-gray-300 mb-10">
                        100% Placement Guarantee • Live Projects • Expert Mentors • Job-Ready in 6 Months
                      </p>

                      <div className="grid grid-cols-3 gap-8">
                        {[
                          { num: "5000+", label: "Students Placed" },
                          { num: "₹12LPA", label: "Avg Package" },
                          { num: "100%", label: "Placement Rate" }
                        ].map((stat, i) => (
                          <motion.div
                            key={i}
                            initial={{ y: 40 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
                          >
                            <div className="text-4xl font-bold text-orange-400">{stat.num}</div>
                            <div className="text-sm text-gray-300 mt-2">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>

                      <img src={Image} alt="Campus" className="mt-10 rounded-2xl shadow-2xl w-full object-cover h-72" />
                    </motion.div>
                  </div>

                  {/* Right Panel - Form */}
                  <div className="p-8 lg:p-16 bg-white/5 backdrop-blur-3xl">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                        Apply for Admission
                      </h2>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
                        <div className="grid md:grid-cols-2 gap-6">
                          <Input label="Email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
                          <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <Select label="Select Course" name="course" options={courses} value={formData.course} onChange={handleChange} error={errors.course} />
                          <Select label="Mode" name="mode" options={["Online", "Offline", "Hybrid"]} value={formData.mode} onChange={handleChange} error={errors.mode} />
                        </div>
                        <Textarea label="Full Address" name="address" value={formData.address} onChange={handleChange} error={errors.address} />
                        <Textarea label="Message (Optional)" name="message" value={formData.message} onChange={handleChange} optional />

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={submitting}
                          className="w-full py-6 text-2xl font-bold text-white bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition"
                        >
                          {submitting ? "Submitting..." : "Submit Application"}
                        </motion.button>
                      </form>

                      <AnimatePresence>
                        {submitted && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="mt-8 p-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl text-center shadow-2xl"
                          >
                            <div className="text-7xl mb-4">Success</div>
                            <h3 className="text-3xl font-bold">Thank You!</h3>
                            <p className="text-lg mt-2">Our team will contact you within 24 hours</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* Reusable Input, Select, Textarea Components */
const Input = ({ label, name, value, onChange, error }) => (
  <label className="block relative">
    <input
      name={name}
      value={value}
      onChange={onChange}
      className={`peer w-full h-16 px-6 pt-6 bg-white/10 border ${error ? "border-red-400" : "border-white/30"} rounded-xl text-white placeholder-transparent focus:border-orange-400 focus:ring-4 focus:ring-orange-400/30 transition`}
      placeholder={label}
    />
    <span className="absolute left-6 top-5 text-gray-400 peer-focus:top-3 peer-focus:text-xs peer-focus:text-orange-300 peer-valid:top-3 peer-valid:text-xs transition-all">
      {label}
    </span>
    {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
  </label>
);

const Select = ({ label, name, value, onChange, error, options }) => (
  <div>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full h-16 px-6 bg-white/10 border ${error ? "border-red-400" : "border-white/30"} text-white rounded-xl focus:border-orange-400 focus:ring-4 focus:ring-orange-400/30 transition`}
    >
      <option value="">{label}</option>
      {options.map(o => <option key={o} value={o} className="bg-slate-900">{o}</option>)}
    </select>
    {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
  </div>
);

const Textarea = ({ label, name, value, onChange, error, optional }) => (
  <label className="block relative">
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={3}
      className={`peer w-full px-6 pt-6 bg-white/10 border ${error ? "border-red-400" : "border-white/30"} rounded-xl resize-none text-white placeholder-transparent focus:border-orange-400 focus:ring-4 focus:ring-orange-400/30 transition`}
      placeholder={label}
    />
    <span className="absolute left-6 top-5 text-gray-400 peer-focus:top-3 peer-focus:text-xs peer-focus:text-orange-300 peer-valid:top-3 peer-valid:text-xs transition-all">
      {label} {optional && "(Optional)"}
    </span>
    {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
  </label>
);