"use client";

import React from "react";

export default function Features() {
  const features = [
    { icon: "🌍", text: "World-Class Travel" },
    { icon: "⚽", text: "Top Football Derbies" },
    { icon: "🏆", text: "International Tournaments" },
    { icon: "🏎️", text: "Formula 1 Races" },
  ];

  return (
    <section className="w-full bg-[#fffaf0] px-6 py-20">
      <div className="max-w-[1100px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#722F37] mb-12">
          Why Choose Sportcation
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-[#e2c7b5] shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <p className="text-[#722F37] font-medium text-lg">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
