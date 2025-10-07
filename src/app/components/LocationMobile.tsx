"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const locations = [
  {
    id: 1,
    name: "London",
    description: "Experience Premier League derbies and Wimbledon like never before.",
    image: "/LB.jpeg",
  },
  {
    id: 2,
    name: "Paris",
    description: "Feel the energy of Roland Garros and PSG’s Parc des Princes.",
    image: "/ET.jpeg",
  },
  {
    id: 3,
    name: "Monaco",
    description: "Glamour meets adrenaline at the world-famous Grand Prix circuit.",
    image: "/MC.jpeg",
  },
  {
    id: 4,
    name: "Cape Town",
    description: "Where rugby tradition meets breathtaking coastal beauty.",
    image: "/CT.jpeg",
  },
];

export default function LocationsMobile() {
  return (
    <section className="md:hidden relative w-full bg-[#fffaf0] py-16 overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center text-[#722F37] mb-8 px-6">
        Explore Our Sportcation Locations
      </h2>

      {/* Horizontal scroll container */}
      <div className="flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory scrollbar-hide scroll-smooth">
        {locations.map((item) => (
          <motion.div
            key={item.id}
            whileTap={{ scale: 0.98 }}
            className="min-w-[85%] snap-center bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0"
          >
            <div className="relative h-64 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-[#722F37] mb-2">
                {item.name}
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
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
