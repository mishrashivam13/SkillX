// src/Pages/Blogs.jsx
import { useEffect, useMemo, useState } from "react";
import BlogGrid from "../Components/BlogGrid";
import blogData from "../Data/blogData";
import FALLBACK from "../assets/ChatGPT Image Nov 25, 2025, 10_54_58 AM.png";

const PAGE_SIZE = 6;

export default function Blogs() {
  // Toasts (unchanged)
  const [toasts] = useState([
    "Tushar Srivastava is Placed in Vivo India P.Ltd.",
    "Prabhat Kumar is Placed in Paytel Financial Technologies P.Ltd.",
    "Anita Sharma is Placed in Zoho Corp.",
    "Bhubnesh Verma is Placed in Objectify Technologies",
  ]);
  const [activeToast, setActiveToast] = useState(0);
  const [toastVisible, setToastVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setToastVisible(false);
      setTimeout(() => {
        setActiveToast((prev) => (prev + 1) % toasts.length);
        setToastVisible(true);
      }, 500);
    }, 4500);
    return () => clearInterval(interval);
  }, [toasts.length]);

  // ---- FILTER / PAGINATION STATE ----
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedMode, setSelectedMode] = useState("All");

  const [page, setPage] = useState(1);

  // derive filter options from data so UI stays in sync
  const categories = useMemo(() => {
    const set = new Set(blogData.map((b) => b.category || "Uncategorized"));
    return ["All", ...Array.from(set)];
  }, []);

  const levels = useMemo(() => {
    const set = new Set(blogData.map((b) => b.level || "Unknown"));
    return ["All", ...Array.from(set)];
  }, []);

  const modes = useMemo(() => {
    const set = new Set(blogData.map((b) => b.mode || "Unknown"));
    return ["All", ...Array.from(set)];
  }, []);

  // filter logic (case-insensitive)
  const filtered = useMemo(() => {
    const txt = searchText.trim().toLowerCase();
    return blogData.filter((b) => {
      // search: title or desc or tags (if exist)
      if (txt) {
        const inTitle = (b.title || "").toLowerCase().includes(txt);
        const inDesc = (b.desc || "").toLowerCase().includes(txt);
        const inTags =
          Array.isArray(b.tags) &&
          b.tags.some((t) => String(t).toLowerCase().includes(txt));
        if (!inTitle && !inDesc && !inTags) return false;
      }

      // category
      if (selectedCategory !== "All" && (b.category || "Uncategorized") !== selectedCategory)
        return false;

      // level
      if (selectedLevel !== "All" && (b.level || "Unknown") !== selectedLevel) return false;

      // mode (Online / Offline)
      if (selectedMode !== "All" && (b.mode || "Unknown") !== selectedMode) return false;

      return true;
    });
  }, [searchText, selectedCategory, selectedLevel, selectedMode]);

  // pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  useEffect(() => {
    // clamp page when filters change
    if (page > totalPages) setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  const paginated = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  // helpers
  const clearFilters = () => {
    setSearchText("");
    setSelectedCategory("All");
    setSelectedLevel("All");
    setSelectedMode("All");
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <header
        className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url('${FALLBACK}')`,
        }}
      >
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange-500 drop-shadow-2xl">
            OUR BLOGS
          </h1>
          <p className="text-white text-lg mt-4">Latest insights, tips & success stories</p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-12 -mt-16 relative z-10">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          {/* LEFT: BLOG GRID + controls */}
          <section className="space-y-8">
            {/* Search & quick info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex gap-3 w-full sm:w-auto">
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      setPage(1);
                    }}
                    placeholder="Search blogs..."
                    className="w-full sm:w-80 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => {
                      setPage(1);
                    }}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg transition"
                  >
                    Search
                  </button>
                </div>

                <div className="text-gray-600 text-sm">
                  Showing <strong>{filtered.length}</strong> result
                  {filtered.length !== 1 ? "s" : ""} - Page <strong>{page}</strong> /{" "}
                  <strong>{totalPages}</strong>
                </div>
              </div>

              {/* Active filter chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedCategory !== "All" && (
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                    }}
                    className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                  >
                    Category: {selectedCategory} ×
                  </button>
                )}
                {selectedLevel !== "All" && (
                  <button
                    onClick={() => setSelectedLevel("All")}
                    className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                  >
                    Level: {selectedLevel} ×
                  </button>
                )}
                {selectedMode !== "All" && (
                  <button
                    onClick={() => setSelectedMode("All")}
                    className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                  >
                    Mode: {selectedMode} ×
                  </button>
                )}

                {(searchText || selectedCategory !== "All" || selectedLevel !== "All" || selectedMode !== "All") && (
                  <button onClick={clearFilters} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Clear all
                  </button>
                )}
              </div>
            </div>

            {/* Blog Grid */}
            <div className="mt-6">
              <BlogGrid items={paginated} />
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                disabled={page <= 1}
              >
                Prev
              </button>

              {/* show first, prev, current, next, last with simple logic */}
              <div className="flex items-center gap-2">
                <button onClick={() => setPage(1)} className={`px-3 py-1 rounded ${page === 1 ? "bg-orange-500 text-white" : "border"}`}>1</button>
                {page > 2 && <span className="px-2">...</span>}
                {page > 1 && page < totalPages && (
                  <button className="px-3 py-1 border rounded bg-white text-sm">{page}</button>
                )}
                {page < totalPages - 1 && <span className="px-2">...</span>}
                <button onClick={() => setPage(totalPages)} className={`px-3 py-1 rounded ${page === totalPages ? "bg-orange-500 text-white" : "border"}`}>{totalPages}</button>
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                disabled={page >= totalPages}
              >
                Next
              </button>
            </div>
          </section>

          {/* RIGHT: SIDEBAR FILTERS */}
          <aside className="space-y-6">
            {/* Quick Keyword */}
            {/* <div className="bg-white rounded-2xl shadow-lg p-6 border">
              <h3 className="font-bold text-lg mb-4">Search</h3>
              <div className="flex">
                <input
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Keyword..."
                  className="flex-1 px-4 py-3 border border-r-0 rounded-l-xl focus:outline-none"
                />
                <button
                  onClick={() => setPage(1)}
                  className="bg-blue-600 text-white px-6 rounded-r-xl hover:bg-blue-700 transition"
                >
                  Search
                </button>
              </div>
            </div> */}

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-3 text-gray-700">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setPage(1);
                    }}
                    className={`py-2 border-b border-gray-200 last:border-0 cursor-pointer transition ${
                      selectedCategory === cat ? "text-orange-500 font-semibold" : "hover:text-orange-500"
                    }`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Level */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border">
              <h3 className="font-bold text-lg mb-4">Level</h3>
              <div className="flex flex-col gap-2">
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => {
                      setSelectedLevel(lvl);
                      setPage(1);
                    }}
                    className={`text-left px-3 py-2 rounded ${selectedLevel === lvl ? "bg-orange-100 text-orange-700" : "hover:bg-gray-50"}`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Mode */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border">
              <h3 className="font-bold text-lg mb-4">Mode</h3>
              <div className="flex flex-col gap-2">
                {modes.map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      setSelectedMode(m);
                      setPage(1);
                    }}
                    className={`text-left px-3 py-2 rounded ${selectedMode === m ? "bg-orange-100 text-orange-700" : "hover:bg-gray-50"}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Need Help?</h3>
              <p className="text-sm opacity-90 mb-4">Talk to our counselor now</p>
              <a href="tel:+919876543210" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
                Call Now
              </a>
            </div>
          </aside>
        </div>
      </main>

      {/* FLOATING PLACEMENT TOAST */}
      <div className="fixed left-6 bottom-6 z-50">
        <div
          key={activeToast}
          className={`bg-white rounded-xl shadow-2xl p-5 flex items-center gap-4 max-w-sm border-l-4 border-orange-500 transform transition-all duration-500 ${
            toastVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <div className="text-4xl animate-bounce">Celebrate</div>
          <div>
            <p className="font-bold text-gray-800">Congratulations!</p>
            <p className="text-sm text-gray-600">{toasts[activeToast]}</p>
          </div>
        </div>
      </div>

      {/* FLOATING CONTACT BUTTONS */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {/* Phone */}
        <a
          href="tel:+919876543210"
          className="group w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-blue-700 transition-all duration-300"
          title="Call Us"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="group w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-green-600 transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.985z"/>
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:info@skillx.com"
          className="group w-14 h-14 bg-orange-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-orange-600 transition-all duration-300"
          title="Send Email"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
