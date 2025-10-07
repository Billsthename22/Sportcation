"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function LocationsSection() {
  return (
    <section className="relative w-full bg-[#fffaf0] py-16 px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-[#722F37]">
        Explore Our Sportcation Locations
      </h2>

      {/* Mobile – swipeable */}
      <div className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory scroll-smooth scrollbar-hide px-2">
        {locations.map((loc) => (
          <motion.div
            key={loc.id}
            whileTap={{ scale: 0.97 }}
            className="min-w-[260px] snap-center bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0"
          >
            <div className="relative h-56 w-full">
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-[#722F37] mb-2">
                {loc.name}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{loc.description}</p>
              <a
                href="https://springandbells.com/tickets/Competition.php?sportCode=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 border-2 border-[#722F37] text-[#722F37] font-medium rounded-lg hover:bg-[#722F37] hover:text-white transition-all"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop – grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {locations.map((loc) => (
          <motion.div
            key={loc.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform cursor-pointer"
          >
            <div className="relative h-60 w-full">
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-[#722F37] mb-2">
                {loc.name}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{loc.description}</p>
              <a
                href="https://springandbells.com/tickets/Competition.php?sportCode=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 border-2 border-[#722F37] text-[#722F37] font-medium rounded-lg hover:bg-[#722F37] hover:text-white transition-all"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
