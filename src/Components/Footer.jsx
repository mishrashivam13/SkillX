import { Link } from "react-router-dom";
import Logo from "../assets/logoksx.png";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 py-12  border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 space-y-10">

        {/* TOP SECTION */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 items-start">

          {/* LOGO + ABOUT */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="SkillX Logo" className="w-25 h-14" />

              <div>
               <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
  Powered by
</p>

<h1 className="text-sm md:text-base font-semibold leading-snug text-gray-200 max-w-xs">
  KotiBox Global <br />
  Technologies (OPC) Pvt. Limited
</h1>

                <h1 className="text-2xl font-extrabold tracking-wide">
                  <span className="text-primary">Skill</span>X
                </h1>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Learn job-ready IT skills with expert trainers, real projects, and
              career-focused programs. Our mission is to upgrade your career.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="relative inline-flex items-center gap-1 text-gray-400 hover:text-primary transition group"
                  >
                    <span className="h-[2px] w-0 bg-primary rounded-full group-hover:w-4 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT + SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Jaipur, Rajasthan</li>

              <li>
                📞{" "}
                <a
                  href="tel:+917852017051"
                  className="hover:text-primary transition"
                >
                  +91 78520 17051
                </a>
              </li>

              <li>
                📧{" "}
                <a
                  href="mailto:contact@skillx.com"
                  className="hover:text-primary transition"
                >
                  contact@skillx.com
                </a>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                Follow us
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="p-2 rounded-full border border-gray-700 hover:border-primary hover:text-primary transition"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href="https://www.instagram.com/kotiboxskillx_academy?igsh=MTAxd2ZmZzZnenp3eA=="
                  className="p-2 rounded-full border border-gray-700 hover:border-primary hover:text-primary transition"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="#"
                  className="p-2 rounded-full border border-gray-700 hover:border-primary hover:text-primary transition"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-800">
          <div className="text-xs md:text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-300">SkillX</span> — All
            Rights Reserved.
          </div>

          <button
            onClick={handleScrollTop}
            className="inline-flex items-center gap-2 text-xs md:text-sm bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-gray-700 hover:border-primary transition"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </button>
        </div>

      </div>
    </footer>
  );
}
