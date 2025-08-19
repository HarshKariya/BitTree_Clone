import React from "react";

const Marketplace = () => {
  const items = [
    { title: "Starter Pack", price: "$10", desc: "Basic tools to get started." },
    { title: "Pro Bundle", price: "$25", desc: "Advanced set with extra features." },
    { title: "Ultimate Suite", price: "$50", desc: "All-in-one premium package." },
    { title: "Custom Plan", price: "Flexible", desc: "Tailored to your needs." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 mt-32">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Marketplace
      </h1>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h2>
            <p className="text-lg text-indigo-600 font-bold mb-3">
              {item.price}
            </p>
            <p className="text-gray-600">{item.desc}</p>
            <button className="mt-5 w-full bg-indigo-500 text-white py-2 rounded-xl hover:bg-indigo-600 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
