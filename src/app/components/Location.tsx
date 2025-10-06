"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const locations = [
  {
    id: 1,
    name: "London",
    description:
      "Experience the thrill of Premier League derbies and Wimbledon.",
    image: "/LB.jpeg",
  },
  {
    id: 2,
    name: "Paris",
    description: "Home of Roland Garros and PSG’s Parc des Princes.",
    image: "/ET.jpeg",
  },
  {
    id: 3,
    name: "Monaco",
    description: "The iconic Grand Prix city blending glamour and racing.",
    image: "/MC.jpeg",
  },
  {
    id: 4,
    name: "Cape Town",
    description: "Rugby traditions meet breathtaking natural beauty.",
    image: "/CT.jpeg",
  },
];

export default function Locations() {
  const [active, setActive] = useState(0);
  const controls = useAnimation();
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
      {/* Background blur (soft image fade) */}
      <motion.div
        key={locations[active].id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={locations[active].image}
          alt={locations[active].name}
          fill
          priority
          className="object-cover opacity-10"
        />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-[#722F37] leading-tight"
      >
        Explore Our Sportcation Locations
      </motion.h2>

      {/* Swipeable Cards Container */}
      <div
        ref={containerRef}
        className="relative z-10 flex items-center gap-6 sm:gap-8 overflow-hidden px-2 sm:px-10 py-4 sm:py-6 w-full justify-center"
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
          dragElastic={0.2}
          className="flex gap-6 sm:gap-8 cursor-grab active:cursor-grabbing"
        >
          {locations.map((item, index) => {
            const isActive = index === active;
            return (
              <motion.div
                key={item.id}
                onClick={() => setActive(index)}
                className={`relative min-w-[80vw] sm:min-w-[320px] h-[420px] sm:h-[450px] rounded-2xl flex-shrink-0 shadow-lg transition-transform ${
                  isActive ? "scale-105 z-20" : "scale-95 opacity-80"
                }`}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-2xl"
                />

                {/* Text overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 rounded-b-2xl bg-[#fffaf0] text-gray-900 border-t border-[#eee]">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: isActive ? 0 : 20,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-xl sm:text-2xl font-semibold text-[#722F37]"
                  >
                    {item.name}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: isActive ? 0 : 20,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-sm mt-2 text-gray-700 leading-relaxed"
                  >
                    {item.description}
                  </motion.p>

                  {isActive && (
                    <motion.a
                      href="https://springandbells.com/tickets/Competition.php?sportCode=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="inline-block mt-4 w-full text-center px-6 py-2.5 border-2 border-[#722F37] text-[#722F37] rounded-xl text-sm sm:text-base font-semibold hover:bg-[#722F37] hover:text-white transition-all duration-300"
                    >
                      Book Now
                    </motion.a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
