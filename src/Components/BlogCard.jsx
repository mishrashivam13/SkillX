// src/Components/BlogCard.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

// Correct way to import image in Vite/React
import FALLBACK from "../assets/kotibox_global_technologies_cover.jpeg";

export default function BlogCard({ blog }) {
  const [imgError, setImgError] = useState(false);

  const {
    id,
    title = "Untitled Blog",
    summary = "Click to read more...",
    image,
    category = "General",
    tags = [],
    date = "Just now",
    author = "Admin",
    readTime = "3 min read",
  } = blog || {};

  const imageSrc = imgError || !image ? FALLBACK : image;

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/blog/${id}`;
    if (navigator.share) {
      try {
        await navigator.share({ title, text: summary, url: shareUrl });
      } catch (err) {
        fallbackCopy(shareUrl);
      }
    } else {
      fallbackCopy(shareUrl);
    }
  };

  const fallbackCopy = (text) => {
    navigator.clipboard?.writeText(text).then(
      () => alert("Link copied!"),
      () => {
        prompt("Copy this link:", text);
      }
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img
          src={imageSrc}
          alt={title}
          onError={() => setImgError(true)}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-lg">
            {category}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Bookmark logic here (optional)
            }}
            className="p-2 bg-white/20 backdrop-blur hover:bg-white/40 rounded-full transition"
            title="Save"
          >
            Bookmark
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleShare();
            }}
            className="p-2 bg-white/20 backdrop-blur hover:bg-white/40 rounded-full transition"
            title="Share"
          >
            Share
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
          <Link to={`/blog/${id}`} className="hover:text-orange-600 transition">
            {title}
          </Link>
        </h3>

        <p className="text-gray-600 text-sm mt-3 line-clamp-3 leading-relaxed">
          {summary}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-gray-500">
            <span className="font-medium text-gray-700">{author}</span>
            <span>•</span>
            <span>{date}</span>
            <span className="hidden sm:inline">• {readTime}</span>
          </div>

          <Link
            to={`/blog/${id}`}
            className="font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1"
          >
            Read More →
          </Link>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}