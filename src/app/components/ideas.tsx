"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Ideas() {
  return (
    <section className="w-full bg-[#fffaf0] px-6 py-16">
      <div className="max-w-[960px] mx-auto space-y-16">
        {/* Section 1 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
        >
          <div>
            <h2 className="text-[22px] font-semibold text-gray-900 mb-2">
              World football festivals.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Immerse yourself in the unforgettable atmospheres of global
              football. From Champions League clashes to legendary rivalries and
              World Cup finals, every match is more than just a game—it’s a
              celebration of passion, unity, and unforgettable sporting drama
              shared by millions across continents.
            </p>
            <motion.a
              href="https://springandbells.com/tickets/Competition.php?sportCode=1"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-2 border-2 border-[#722F37] text-[#722F37] px-7 py-3 rounded-md text-base font-semibold hover:bg-[#722F37] hover:text-white transition-all duration-300"
            >
              Book Now
            </motion.a>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="/FB.jpeg"
              alt="World football festivals"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
        >
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 order-2 md:order-1">
            <Image
              src="/RG.jpeg"
              alt="Roland Garros escapes"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[22px] font-semibold text-gray-900 mb-2">
              Roland Garros escapes.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Experience the timeless elegance of tennis at Roland Garros. Watch
              world-class athletes compete on the iconic clay courts, enjoy
              luxury hospitality, and soak up Parisian culture in between
              thrilling matches—making every day an unforgettable blend of sport
              and sophistication.
            </p>
            <motion.a
              href="https://springandbells.com/tickets/Competition.php?sportCode=2"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-2 border-2 border-[#722F37] text-[#722F37] px-7 py-3 rounded-md text-base font-semibold hover:bg-[#722F37] hover:text-white transition-all duration-300"
            >
              Book Now
            </motion.a>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
        >
          <div>
            <h2 className="text-[22px] font-semibold text-gray-900 mb-2">
              Grand Prix racing weekends.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Feel the adrenaline surge as you join passionate fans at iconic
              Formula 1 tracks. From the roaring engines to behind-the-scenes
              paddock tours and glamorous afterparties, every race weekend is a
              high-octane adventure that blends speed, style, and unforgettable
              moments.
            </p>
            <motion.a
              href="https://springandbells.com/tickets/Competition.php?sportCode=11"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-2 border-2 border-[#722F37] text-[#722F37] px-7 py-3 rounded-md text-base font-semibold hover:bg-[#722F37] hover:text-white transition-all duration-300"
            >
              Book Now
            </motion.a>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="/GP.jpeg"
              alt="Grand Prix racing weekends"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* Section 4 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
        >
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 order-2 md:order-1">
            <Image
              src="/RT.jpeg"
              alt="Rugby world traditions"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[22px] font-semibold text-gray-900 mb-2">
              Rugby world traditions.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Step into the electrifying world of rugby, where strength,
              strategy, and spirit collide. From the fierce Six Nations battles
              in Europe to the Rugby World Cup and legendary stadiums in New
              Zealand and South Africa, every match is a chance to witness
              unmatched intensity and camaraderie among fans and players alike.
            </p>
            <motion.a
              href="https://springandbells.com/tickets/Competition.php?sportCode=3"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-2 border-2 border-[#722F37] text-[#722F37] px-7 py-3 rounded-md text-base font-semibold hover:bg-[#722F37] hover:text-white transition-all duration-300"
            >
              Book Now
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.2 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-semibold text-lg text-gray-900">
            Every Sportcation is a passport to epic sporting drama.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Meet fellow thrill-seekers, celebrate victories, and discover new
            cultures in unforgettable destinations—all while living out your
            sports passion and creating stories you’ll share for a lifetime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
