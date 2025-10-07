"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const locations = [
  { id: 1, name: "London", description: "Experience the thrill of Premier League derbies and Wimbledon.", image: "/LB.jpeg" },
  { id: 2, name: "Paris", description: "Home of Roland Garros and PSG’s Parc des Princes.", image: "/ET.jpeg" },
  { id: 3, name: "Monaco", description: "The iconic Grand Prix city blending glamour and racing.", image: "/MC.jpeg" },
  { id: 4, name: "Cape Town", description: "Rugby traditions meet breathtaking natural beauty.", image: "/CT.jpeg" },
];

export default function Locations() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % locations.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[650px] flex flex-col items-center justify-center bg-[#fffaf0] overflow-hidden py-16 px-4 sm:px-6">
      {/* Heading */}
      <h2 className="relative z-10 text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-[#722F37] leading-tight">
        Explore Our Sportcation Locations
      </h2>

      {/* Swipeable Cards */}
      <div
        ref={containerRef}
        className="relative z-10 flex overflow-x-auto gap-6 sm:gap-8 px-2 sm:px-6 py-4 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
      >
        {locations.map((item, index) => {
          const isActive = index === active;
          return (
            <motion.div
              key={item.id}
              onClick={() => setActive(index)}
              className={`snap-center flex-shrink-0 relative rounded-2xl shadow-lg overflow-hidden
                         min-w-[75%] sm:min-w-[320px] md:min-w-[280px] h-[420px] sm:h-[450px]
                         transition-transform duration-500 ${
                           isActive ? "scale-105 z-20" : "scale-95 opacity-80 z-10"
                         }`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-2xl"
              />

              {/* Text Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 rounded-b-2xl bg-[#fffaf0] border-t border-[#eee]">
                <h3 className={`text-xl sm:text-2xl font-semibold text-[#722F37] transition-all duration-300 ${isActive ? "opacity-100" : "opacity-70"}`}>
                  {item.name}
                </h3>
                <p className={`text-sm mt-2 text-gray-700 leading-relaxed transition-all duration-300 ${isActive ? "opacity-100" : "opacity-70"}`}>
                  {item.description}
                </p>

                {isActive && (
                  <a
                    href="https://springandbells.com/tickets/Competition.php?sportCode=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 w-full text-center px-6 py-2.5 border-2 border-[#722F37] text-[#722F37] rounded-xl text-sm sm:text-base font-semibold hover:bg-[#722F37] hover:text-white transition-all duration-300"
                  >
                    Book Now
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
