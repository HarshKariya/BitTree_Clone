import React from "react";

const Discover = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6 mt-32">
      <div className="max-w-6xl mx-auto">
        {/* Search Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Discover</h1>
          <input
            type="text"
            placeholder="Search..."
            className=" text-black w-full sm:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {["All", "Trending", "New", "Popular", "Recommended"].map(
            (category, index) => (
              <button
                key={index}
                className="px-5 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium hover:bg-indigo-200"
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Trending Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Trending</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {["React Basics", "Next.js Tips", "UI Design", "Cloud Computing", "Cybersecurity", "Java Mastery"].map(
            (title, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore more about {title} with helpful insights and resources.
                </p>
                <button className="text-indigo-600 font-medium hover:underline">
                  Learn More →
                </button>
              </div>
            )
          )}
        </div>

        {/* Recommended Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["JavaScript Advanced", "AWS Fundamentals", "UI/UX Principles", "Database Systems"].map(
            (title, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Dive into {title} with curated tutorials and guides.
                </p>
                <button className="text-indigo-600 font-medium hover:underline">
                  Explore →
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;
