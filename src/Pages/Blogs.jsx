// src/Pages/Blogs.jsx
import { useEffect, useMemo, useState } from "react";
import BlogGrid from "../Components/BlogGrid";
import blogData from "../Data/blogData";
import FALLBACK from "../assets/ChatGPT Image Nov 25, 2025, 10_54_58 AM.png";
import FloatingIcons from '../Components/FloatingIcons'

const PAGE_SIZE = 6;

export default function Blogs() {




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
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

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

                {(searchText ||
                  selectedCategory !== "All" ||
                  selectedLevel !== "All" ||
                  selectedMode !== "All") && (
                  <button
                    onClick={clearFilters}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
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
                className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
                disabled={page <= 1}
              >
                Prev
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage(1)}
                  className={`px-3 py-1 rounded ${
                    page === 1 ? "bg-orange-500 text-white" : "border"
                  }`}
                >
                  1
                </button>
                {page > 2 && <span className="px-2">...</span>}
                {page > 1 && page < totalPages && (
                  <button className="px-3 py-1 border rounded bg-white text-sm">
                    {page}
                  </button>
                )}
                {page < totalPages - 1 && <span className="px-2">...</span>}
                <button
                  onClick={() => setPage(totalPages)}
                  className={`px-3 py-1 rounded ${
                    page === totalPages ? "bg-orange-500 text-white" : "border"
                  }`}
                >
                  {totalPages}
                </button>
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
                disabled={page >= totalPages}
              >
                Next
              </button>
            </div>
          </section>

          {/* RIGHT: SIDEBAR FILTERS */}
          <aside className="space-y-6">
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
                      selectedCategory === cat
                        ? "text-orange-500 font-semibold"
                        : "hover:text-orange-500"
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
                    className={`text-left px-3 py-2 rounded ${
                      selectedLevel === lvl
                        ? "bg-orange-100 text-orange-700"
                        : "hover:bg-gray-50"
                    }`}
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
                    className={`text-left px-3 py-2 rounded ${
                      selectedMode === m
                        ? "bg-orange-100 text-orange-700"
                        : "hover:bg-gray-50"
                    }`}
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
              <a
                href="tel:+917852017051"
                className="inline-block bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
              >
                Call Now
              </a>
            </div>
          </aside>
        </div>
      </main>

  

      {/* FLOATING CONTACT BUTTONS */}
     <FloatingIcons />

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
