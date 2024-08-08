import React from "react";
import heroVideo from "../../assets/hero-video.mp4";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <section className="flex flex-col items-center text-center">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          className="w-full h-64 object-cover rounded-lg shadow-md"
        ></video>
        <h2 className="text-4xl font-semibold text-blue-900 mt-8">
          Welcome to Horus
        </h2>
        <p className="mt-4 text-gray-700 max-w-prose">
          Horus is an educational game designed to teach players about climate
          change and resilience. Explore engaging stories, interactive learning,
          and real-world data to build a better future.
        </p>
        
      </section>
    </main>
  );
};

export default Home;
