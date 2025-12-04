import React from "react";

// Clean up imports (use meaningful names and prefer SVG where possible)
import MercedesLogo from "../assets/mercedes-benz-.png";          // if SVG available
import AccentureLogo from "../assets/Accenture.svg.png";
import BirlaLogo from "../assets/BLogo.jpg";
import AlgoscaleLogo from "../assets/ALGOSCALE-BLACK-LOGO.png";
import BajajLogo from "../assets/Bajaj_Auto_Ltd_logo.svg.png";
import BirlasoftLogo from "../assets/Birlasoft.svg.png";
import CSCLogo from "../assets/Common_Service_Centres_logo.png";
import CognizantLogo from "../assets/Cognizant-Logo.jpg";
import HewittLogo from "../assets/hewitt-associates2849.logowik.com.webp";
import IBMLogo from "../assets/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png";
import SopraLogo from "../assets/images.png";
import TCSLogo from "../assets/TCS-logo.jpg";
import JubilantLogo from "../assets/Jubilant FoodWorks.jpg";
import InfosysLogo from "../assets/Infosys.png";

const partners = [
  { name: "Mercedes-Benz", logo: MercedesLogo },
  { name: "Accenture", logo: AccentureLogo },
  { name: "Aditya Birla Group", logo: BirlaLogo },
  { name: "Algoscale", logo: AlgoscaleLogo },
  { name: "Bajaj", logo: BajajLogo },
  { name: "Birlasoft", logo: BirlasoftLogo },
  { name: "CSC", logo: CSCLogo },
  { name: "Cognizant", logo: CognizantLogo },
  { name: "Hewitt", logo: HewittLogo },
  { name: "IBM", logo: IBMLogo },
  { name: "Sopra Steria", logo: SopraLogo },
  { name: "TCS", logo: TCSLogo },
  { name: "Jubilant FoodWorks", logo: JubilantLogo },
  { name: "Infosys", logo: InfosysLogo },
];

export default function PlacementPartners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Placement Partners
          </h2>
          <div className="mt-3 h-1 w-24 bg-orange-500 rounded-full" />
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              title={partner.name}
              className="group relative flex items-center justify-center w-full h-32 bg-white border border-gray-200 rounded-2xl shadow-sm 
                         transition-all duration-300 hover:shadow-lg hover:border-gray-300"
            >
              {/* Grayscale on hover (color on hover) */}
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-20 max-w-[80%] object-contain grayscale group-hover:grayscale-0 
                           transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Optional: Add a subtle note */}
        <p className="mt-12 text-center text-gray-600 text-sm">
          We proudly collaborate with leading companies to provide excellent placement opportunities for our students.
        </p>
      </div>
    </section>
  );
}