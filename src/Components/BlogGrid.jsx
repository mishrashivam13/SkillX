// src/Components/BlogGrid.jsx
import { Link } from "react-router-dom";

export default function BlogGrid({ items = [] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((blog, index) => (
        <div
          key={blog.id || index}
          className="group animate-fade-up"
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <Link to={`/blog/${blog.id}`} className="block h-full">
            <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-orange-200">

              {/* Image */}
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={blog.image || "/fallback.jpg"}
                  alt={blog.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => e.target.src = "https://via.placeholder.com/600x400?text=No+Image"}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-lg">
                    {blog.category || "General"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                  {blog.summary || "Read the full article to learn more..."}
                </p>
                <div className="flex items-center justify-between mt-6 text-sm">
                  <span className="text-gray-500">
                    {blog.date || "Recently"}
                  </span>
                  <span className="text-orange-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </div>
  );
}