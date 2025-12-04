import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CourseCard from "../Components/CourseCard";
import courses from "../Data/coursesData";
import BG from '../assets/ChatGPT Image Nov 25, 2025, 10_54_58 AM.png'
import FloatingIcons from "../Components/FloatingIcons";


const pageVariants = {
  hidden: { opacity: 0, y: 6 },
  enter: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.06 } },
  exit: { opacity: 0, y: 6 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 220, damping: 22 } },
};

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedMode, setSelectedMode] = useState("All");

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("relevance");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // debounce search UX: show searching state for micro-moment
  useEffect(() => {
    if (!query) return setIsSearching(false);
    setIsSearching(true);
    const t = setTimeout(() => setIsSearching(false), 350);
    return () => clearTimeout(t);
  }, [query]);

  const categories = useMemo(() => ["All", "Development", "Design", "AI/ML", "Data Science", "Cloud", "Cyber Security"], []);
  const levels = useMemo(() => ["All", "Beginner", "Intermediate", "Advanced"], []);
  const modes = useMemo(() => ["All", "Online", "Offline"], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = courses.filter((course) => {
      return (
        (selectedCategory === "All" || course.category === selectedCategory) &&
        (selectedLevel === "All" || course.level === selectedLevel) &&
        (selectedMode === "All" || course.mode === selectedMode) &&
        (q === "" ||
          course.title.toLowerCase().includes(q) ||
          (course.desc && course.desc.toLowerCase().includes(q)))
      );
    });

    if (sort === "newest") list = list.slice().sort((a, b) => (b.id || 0) - (a.id || 0));
    if (sort === "price-low") list = list.slice().sort((a, b) => (a.price || 0) - (b.price || 0));
    if (sort === "price-high") list = list.slice().sort((a, b) => (b.price || 0) - (a.price || 0));

    return list;
  }, [selectedCategory, selectedLevel, selectedMode, query, sort]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedLevel("All");
    setSelectedMode("All");
    setQuery("");
    setSort("relevance");
    setMobileFiltersOpen(false);
  };

  return (
    <motion.div initial="hidden" animate="enter" exit="exit" variants={pageVariants} className="max-w-7xl mx-auto px-4 sm:px-5 py-8">
      {/* Banner */}
      <motion.div layout className="rounded-xl overflow-hidden mb-8 relative h-44 sm:h-56 bg-cover bg-center shadow-lg"
        style={{
          backgroundImage:  `url(${BG})`,
        }}>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-5">
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold">
              Explore Courses — Learn, Build & Get Hired
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="text-white/90 mt-2 max-w-2xl">
              Filter by category, level, or mode. Use search to quickly find the perfect course.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Toolbar */}
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between mb-6">
        <div className="flex-1 flex items-center gap-3 w-full">
          <div className="flex items-center bg-white border rounded-xl shadow-sm px-3 py-2 w-full">
            <svg className="w-5 h-5 text-gray-400 mr-3" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5"/></svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full outline-none text-sm bg-transparent"
              placeholder="Search courses, skills or topics..."
            />
            {query ? (
              <button onClick={() => setQuery("")} className="text-sm text-gray-500 ml-3">Clear</button>
            ) : (
              <div className="text-xs text-gray-400 ml-3">{isSearching ? "Searching..." : "Type to search"}</div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.02 }} className="text-sm text-gray-600 hidden sm:inline">
            <span className="font-semibold text-gray-900">{filtered.length}</span> results
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white border rounded-lg px-3 py-1">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="text-sm outline-none bg-transparent">
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
            </select>
          </motion.div>

          <motion.button onClick={clearFilters} whileHover={{ scale: 1.03 }} className="text-sm text-gray-600 hover:text-primary transition hidden sm:inline">
            Clear filters
          </motion.button>

          <motion.button onClick={() => setMobileFiltersOpen((s) => !s)} whileTap={{ scale: 0.96 }} className="bg-white p-2 rounded-md border sm:hidden" aria-expanded={mobileFiltersOpen} aria-label="Toggle filters">
            Filters
          </motion.button>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-[260px_1fr] gap-8">
        {/* Sidebar */}
        <aside className="hidden md:block">
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }} className="sticky top-24 bg-white border rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Filters</h3>

            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Category</h4>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    whileTap={{ scale: 0.98 }}
                    className={`text-sm text-left px-3 py-2 rounded-md transition ${selectedCategory === cat ? "bg-primary text-white" : "bg-gray-50 hover:bg-gray-100"}`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Level</h4>
              <div className="flex flex-col gap-2">
                {levels.map((lvl) => (
                  <motion.button key={lvl} onClick={() => setSelectedLevel(lvl)} whileTap={{ scale: 0.98 }} className={`text-sm text-left px-3 py-2 rounded-md transition ${selectedLevel === lvl ? "bg-primary text-white" : "bg-gray-50 hover:bg-gray-100"}`}>
                    {lvl}
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Mode</h4>
              <div className="flex flex-col gap-2">
                {modes.map((m) => (
                  <motion.button key={m} onClick={() => setSelectedMode(m)} whileTap={{ scale: 0.98 }} className={`text-sm text-left px-3 py-2 rounded-md transition ${selectedMode === m ? "bg-primary text-white" : "bg-gray-50 hover:bg-gray-100"}`}>
                    {m}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </aside>

        {/* Mobile filters drawer */}
        <AnimatePresence>
          {mobileFiltersOpen && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="md:hidden mb-4">
              <div className="bg-white border rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">Filters</h4>
                  <button onClick={() => setMobileFiltersOpen(false)} className="text-sm text-gray-500">Close</button>
                </div>

                <div className="mb-3">
                  <h5 className="text-xs font-semibold mb-2">Category</h5>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <motion.button key={cat} onClick={() => setSelectedCategory(cat)} whileTap={{ scale: 0.97 }} className={`px-3 py-1 rounded-full text-sm border ${selectedCategory === cat ? "bg-primary text-white border-primary" : "bg-white"}`}>
                        {cat}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-xs font-semibold mb-2">Level</h5>
                  <div className="flex flex-wrap gap-2">
                    {levels.map((lvl) => (
                      <motion.button key={lvl} onClick={() => setSelectedLevel(lvl)} whileTap={{ scale: 0.97 }} className={`px-3 py-1 rounded-full text-sm border ${selectedLevel === lvl ? "bg-primary text-white border-primary" : "bg-white"}`}>
                        {lvl}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-semibold mb-2">Mode</h5>
                  <div className="flex flex-wrap gap-2">
                    {modes.map((m) => (
                      <motion.button key={m} onClick={() => setSelectedMode(m)} whileTap={{ scale: 0.97 }} className={`px-3 py-1 rounded-full text-sm border ${selectedMode === m ? "bg-primary text-white border-primary" : "bg-white"}`}>
                        {m}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Courses grid */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">All Courses</h2>
            <div className="text-sm text-gray-500">Showing <span className="font-semibold text-gray-900">{filtered.length}</span> courses</div>
          </div>

          {filtered.length === 0 ? (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-600">No courses match the selected filters.</motion.p>
          ) : (
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filtered.map((course, idx) => (
                  <motion.div key={course.id || idx} variants={itemVariants} initial="hidden" animate="show" exit="hidden" whileHover={{ translateY: -6, scale: 1.01 }} className="will-change-transform">
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </section>
      </div>
      <FloatingIcons />
    </motion.div>
  );
}
