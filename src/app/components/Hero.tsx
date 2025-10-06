"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFutbol, FaFlagCheckered, FaRunning } from "react-icons/fa";
import { GiTennisBall } from "react-icons/gi";
import Image from "next/image";

export default function Hero() {
  // Track which sport is active
  const [activeSport, setActiveSport] = useState("default");

  // Backgrounds for each sport
  const backgrounds: Record<string, string> = {
    default: "/stadium.jpg",
    football: "/soccer.jpeg",
    tennis: "/hd11.jpeg",
    f1: "/hd2.jpeg",
    rugby: "/hd3.jpeg",
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSport}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={backgrounds[activeSport]}
            alt={`${activeSport} background`}
            fill
            priority
            className="object-cover brightness-75"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#722F37]/30 to-[#fffaf0]/10 -z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
          Your Sports. Your City.{" "}
          <span className="text-[#F4C2C2]">Your Experience.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Live the thrill of Football, Tennis, Formula 1, and Rugby like never
          before. Curated travel experiences for the passionate fan.
        </p>

        {/* Sports Icons — clickable to change background */}
        <div className="flex justify-center gap-8 text-5xl mb-10 text-white">
          <FaFutbol
            onClick={() => setActiveSport("football")}
            className={`cursor-pointer transition-transform hover:scale-110 ${
              activeSport === "football" ? "text-green-400 scale-110" : ""
            }`}
            title="Football"
          />
          <GiTennisBall
            onClick={() => setActiveSport("tennis")}
            className={`cursor-pointer transition-transform hover:scale-110 ${
              activeSport === "tennis" ? "text-yellow-400 scale-110" : ""
            }`}
            title="Tennis"
          />
          <FaFlagCheckered
            onClick={() => setActiveSport("f1")}
            className={`cursor-pointer transition-transform hover:scale-110 ${
              activeSport === "f1" ? "text-red-400 scale-110" : ""
            }`}
            title="Formula 1"
          />
          <FaRunning
            onClick={() => setActiveSport("rugby")}
            className={`cursor-pointer transition-transform hover:scale-110 ${
              activeSport === "rugby" ? "text-blue-400 scale-110" : ""
            }`}
            title="Rugby"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
          <button className="bg-[#722F37] hover:bg-[#5e2530] text-white px-8 py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all">
            Book Your Sportcation
          </button>
          <button className="border border-white hover:bg-white hover:text-[#722F37] px-8 py-3 rounded-xl text-lg font-medium text-white bg-white/10 backdrop-blur-sm transition-all">
            Explore Events
          </button>
        </div>
      </motion.div>

      {/* Subtle fade overlay */}
      <div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-[#fffaf0]/10 to-transparent pointer-events-none" />
    </section>
  );
}
