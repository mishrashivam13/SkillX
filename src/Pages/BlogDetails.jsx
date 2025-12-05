// src/Pages/BlogDetails.jsx
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { format } from "date-fns";
import blogData from "../Data/blogData";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="text-center max-w-md">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Blog Not Found</h2>
          <p className="text-gray-600 mb-6">
            The article you're looking for does not exist.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600"
          >
            <ArrowLeft size={18} /> Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const publishedDate = blog.date ? new Date(blog.date) : new Date();
  const readingTime =
    blog.readingTime ||
    Math.ceil((blog.content || blog.summary).split(" ").length / 200);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <header className="relative h-[420px] sm:h-[520px] lg:h-[620px] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-16">

            <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              {blog.category}
            </span>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
              {blog.title}
            </h1>

            <div className="flex flex-wrap gap-6 mt-5 text-white/80 text-sm">
              {blog.author && (
                <span className="flex items-center gap-2">
                  <User size={16} /> {blog.author}
                </span>
              )}

              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {format(publishedDate, "MMM d, yyyy")}
              </span>

              <span className="flex items-center gap-2">
                <Clock size={16} />
                {readingTime} min read
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* INTRO CARD */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 -mt-24 relative z-10 border">

          <p className="text-xl text-gray-700 font-medium mb-8 leading-relaxed">
            {blog.summary}
          </p>

          {/* ARTICLE */}
          <article
            className="
              prose prose-lg max-w-none
              prose-headings:font-bold
              prose-headings:text-gray-900
              prose-p:text-gray-700
              prose-li:text-gray-700
              prose-a:text-orange-600 hover:prose-a:text-orange-700
              prose-blockquote:border-l-orange-500
              prose-blockquote:bg-orange-50/50
              prose-blockquote:pl-5
              prose-img:rounded-xl
            "
          >
            <div className="whitespace-pre-line text-gray-700 leading-8">
              {blog.content || blog.summary}
            </div>
          </article>

          {/* TAGS */}
          {blog.tags?.length > 0 && (
            <div className="border-t mt-12 pt-8">
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                Topics Covered
              </h3>

              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-4 py-2 text-sm rounded-full
                      bg-gray-100 text-gray-700
                      hover:bg-orange-100 hover:text-orange-700
                      transition
                    "
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 pt-10 border-t flex flex-col md:flex-row items-center justify-between gap-6">

            <Link
              to="/blogs"
              className="
                inline-flex items-center gap-3 text-sm
                px-6 py-3 rounded-full
                bg-gray-100 hover:bg-gray-200
                text-gray-800 font-medium
                transition
              "
            >
              <ArrowLeft size={18} />
              Back to Blogs
            </Link>

            <Link
              to="/contact"
              className="
                bg-orange-500 text-white
                px-8 py-3 font-semibold rounded-full
                hover:bg-orange-600 transition
                shadow-lg hover:shadow-xl
              "
            >
              Enquire about this course
            </Link>

          </div>
        </div>

      </main>

    </div>
  );
}
