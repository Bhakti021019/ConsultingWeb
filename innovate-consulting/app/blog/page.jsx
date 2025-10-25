"use client";
import { useState } from "react";
import Link from "next/link";
import { articles } from "../data/articles";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = ["All", ...new Set(articles.map((a) => a.category))];

  // Filter logic
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        Our Insights & Articles
      </h1>

      {/* 🔍 Search + Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* 📰 Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                {/* Category + Read Time */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span className="text-blue-600 font-semibold">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mt-1 mb-3 text-gray-900">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>

                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={article.author.image}
                    alt={article.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {article.author.name}
                    </p>
                    <p className="text-xs text-gray-500">{article.date}</p>
                  </div>
                </div>

                {/* Read More */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">
          No articles found for your search.
        </p>
      )}
    </main>
  );
}
