"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  q: string;
  a: string;
}

const faqData: FAQItem[] = [
  {
    q: "What kind of events can I attend?",
    a: "You can attend world-class football tournaments, tennis grand slams, Formula 1 races, rugby championships, and other electrifying sporting events across the globe.",
  },
  {
    q: "Do you offer immersive experiences beyond the game?",
    a: "Yes! Our packages go beyond just match tickets. We include exclusive city tours, stadium access, behind-the-scenes experiences, hospitality lounges, and cultural highlights to make your trip unforgettable.",
  },
  {
    q: "How can I claim my spot for the next Sportcation?",
    a: "It’s simple! Browse upcoming events on our platform, select your preferred package, and complete your booking online. Spots are limited, so reserving early guarantees your place at the world’s biggest sporting stages.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#fffaf0] px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-[#722F37]">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-[#e2c7b5]">
          {faqData.map((item, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-[#722F37]">
                  {item.q}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#722F37]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#722F37]" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-[#722F37] leading-relaxed text-base font-normal">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
