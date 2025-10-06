"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/f1logo.jpeg",
  "/f1i.jpeg",
  "/f1ii.jpeg",
  "/f1iii.jpeg",
  "/f1iv.jpeg",
  "/f1v.jpeg",
];

export default function Experience() {
  const [active, setActive] = useState(0);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#fffaf0] px-6 py-16">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left – Slideshow */}
        <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-md">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === active ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={`Formula 1 Moment ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>

        {/* Right – Content */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#722F37] mb-4">
            Formula 1 Racing Moments
          </h2>
          <p className="text-[#333] leading-relaxed mb-4 text-[16px]">
            The thrill of F1 is unmatched — speed, strategy, and adrenaline all
            converge to create unforgettable weekends. From legendary circuits
            to luxury paddocks, experience racing like never before.
          </p>
          <p className="text-[#333] leading-relaxed text-[16px]">
            Witness the roar of engines, the glamour of pit lanes, and the
            electric energy of global fans as you live the ultimate sporting
            journey.
          </p>
        </div>
      </div>
    </section>
  );
}
