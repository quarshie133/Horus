import React from "react";
import heroVideo from "../../assets/hero-video.mp4";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <section className="flex flex-col items-center text-center">
       
        <h1 className="text-4xl font-semibold text-blue-900 mt-8">
          Site is under construction
        </h1>
        <p>coming soon...</p>
        {/* <p className="mt-4 text-gray-700 max-w-prose">
          Horus is an educational game designed to teach players about climate
          change and resilience. Explore engaging stories, interactive learning,
          and real-world data to build a better future.
        </p> */}
        
      </section>
    </main>
  );
};

export default Home;
