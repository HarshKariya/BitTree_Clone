import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "$9/month",
      features: ["Access to core features", "Email support", "Community access"],
    },
    {
      title: "Pro",
      price: "$29/month",
      features: [
        "Everything in Basic",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
      ],
    },
    {
      title: "Premium",
      price: "$59/month",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "24/7 support",
        "Early access to new features",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10 flex flex-col items-center mt-32">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Pricing Plans</h1>
      <p className="text-gray-600 mb-12 text-center max-w-xl">
        Choose a plan that fits your needs. Upgrade anytime as your projects grow.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center border hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{plan.title}</h2>
            <p className="text-3xl font-bold text-indigo-600 mb-6">{plan.price}</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="border-b pb-2">{feature}</li>
              ))}
            </ul>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-indigo-700 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
