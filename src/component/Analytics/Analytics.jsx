import React from "react";

const Analytics = () => {
  return (
    <div className="bg-white py-12 px-6 lg:px-16">
      {/* Title Section */}
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center">
        Analytics that feels like it's from the future
      </h2>
      <p className="text-center text-gray-600 mt-2 lg:text-lg">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
        {[
          {
            title: "Share team inboxes",
            description: "Manage conversations across multiple channels easily.",
          },
          {
            title: "Deliver instant answers",
            description: "Provide quick and seamless customer support.",
          },
          {
            title: "Manage your team",
            description: "Track team performance and manage reports effectively.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
