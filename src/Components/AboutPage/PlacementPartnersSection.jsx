// src/Components/AboutPage/PlacementPartnersSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function PlacementPartnersSection() {
  const companies = [
    "Tech Mahindra",
    "Infosys",
    "Wipro",
    "TCS",
    "Accenture",
    "Capgemini",
    "Cognizant",
    "HCL",
    "IBM",
    "Microsoft",
    "Amazon",
    "Google",
    "Paytm",
    "Flipkart",
    "Zomato",
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Placement Partners
          </h2>
          <p className="text-slate-300 text-lg">
            500+ companies trust our trained professionals
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{ x: [0, -1800] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex-shrink-0 text-slate-400 hover:text-white text-lg font-semibold transition-colors duration-300 whitespace-nowrap"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
