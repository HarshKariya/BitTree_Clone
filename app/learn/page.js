import React from "react";

const Learn = () => {
  return (
    <div className="min-h-screen bg-gray-100 mt-32">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Start Learning with Us</h1>
        <p className="mt-2 text-lg">Enhance your skills with guided lessons and resources</p>
      </header>

      {/* Introduction Section */}
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-black">Why Learn Here?</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Our platform offers carefully structured lessons designed by experts.
          Learn at your own pace, track progress, and unlock achievements as you
          grow.
        </p>
      </section>

      {/* Features / Topics Section */}
      <section className="py-12 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-indigo-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2 text-black">Interactive Lessons</h3>
          <p className="text-gray-700">Engage with step-by-step tutorials and challenges.</p>
        </div>
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2 text-black">Track Progress</h3>
          <p className="text-gray-700">Monitor your journey with dashboards and insights.</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2 text-black">Expert Guidance</h3>
          <p className="text-gray-700">Learn directly from industry professionals and mentors.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-12 text-center">
        <h2 className="text-2xl font-bold">Ready to Begin?</h2>
        <p className="mt-2">Start your learning journey today and unlock your full potential!</p>
        <button className="mt-4 px-6 py-2 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-200">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Learn;
