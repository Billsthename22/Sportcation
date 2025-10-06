import React from 'react';

const Whatweoffer = () => {
  return (
    <section className="bg-[#192337] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-10">What We Offer</h2>

        {/* Grid of Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Soccer */}
          <div className="bg-[#24304a] p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Soccer</h3>
            <p className="text-gray-300">
              Latest news, scores, and highlights from global football.
            </p>
          </div>

          {/* Formula 1 */}
          <div className="bg-[#24304a] p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Formula 1</h3>
            <p className="text-gray-300">
              Race schedules, results, and updates from the F1 circuit.
            </p>
          </div>

          {/* Rugby */}
          <div className="bg-[#24304a] p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Rugby</h3>
            <p className="text-gray-300">
              Coverage of rugby matches, leagues, and tournaments.
            </p>
          </div>

          {/* Tennis */}
          <div className="bg-[#24304a] p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Tennis</h3>
            <p className="text-gray-300">
              Grand Slam news, live scores, and player rankings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatweoffer;
