"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    name: "Anna K.",
    text:
      "There’s nothing like watching El Clásico live. Sportcation made it seamless and unforgettable. Best trip of my sports journey.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Mark L.",
    text:
      "Traveling to Paris for Roland Garros was always a dream. This experience was nothing short of magical.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Priya M.",
    text:
      "Unforgettable stadium experiences, new friendships, and world-class hospitality. I’ll definitely book again.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#fffaf0] px-6 py-20">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.2 }}
          className="text-3xl md:text-4xl font-semibold text-center text-[#722F37] mb-4"
        >
          Hear from Real Fans
        </motion.h2>
        <p className="text-center text-[#333] mb-12 text-[16px]">
          Sportcation memories, shared by our travelers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ amount: 0.2 }}
              className="rounded-2xl border border-[#e5d4c2] bg-white shadow-md p-6 hover:shadow-lg transition"
            >
              <p className="text-[#333] italic mb-6 leading-relaxed">
                “{t.text}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#722F37]"
                />
                <p className="text-[#722F37] font-medium text-lg">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
