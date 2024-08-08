import React from 'react';
import climateImg from "../../assets/climate.png";
import GameApp from "../../assets/game app.png";

const Features = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <section className="my-8 flex flex-col md:flex-row items-center justify-between text-center">
        <img
          src={climateImg}
          alt="Climate Resilience"
          className="w-full max-w-xs h-auto mb-8 md:mb-0 md:max-w-sm"
        />
        <div className="flex-1 px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">Features of Horus</h2>
          <p className="mt-4 text-gray-700">
            Horus offers a range of features designed to engage and educate players about climate resilience.
          </p>
          <ul className="mt-8 space-y-4 text-left">
            <li className="flex items-start">
              <span className="text-blue-900 font-bold mr-2">🌍</span>
              <span>Immersive storytelling that takes players through real-world scenarios.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 font-bold mr-2">📚</span>
              <span>Interactive learning modules that provide in-depth knowledge about climate change.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 font-bold mr-2">📊</span>
              <span>Integration of real-world data to make the game experience more realistic.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 font-bold mr-2">🤝</span>
              <span>Community collaboration features that encourage teamwork and collective action.</span>
            </li>
          </ul>
        </div>
        <img
          src={GameApp}
          alt="Climate Game App"
          className="w-full max-w-xs h-auto mt-8 md:mt-0 md:max-w-sm"
        />
      </section>
    </main>
  );
};

export default Features;
