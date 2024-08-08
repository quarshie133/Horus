// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <section className="my-8 text-center">
        <h2 className="text-4xl font-semibold text-blue-900">About Horus</h2>
        <p className="mt-4 text-gray-700 max-w-prose mx-auto">
          Horus is an innovative game focused on climate resilience. It educates players through engaging stories, interactive modules, and real-world data. Our mission is to raise awareness and drive action towards a sustainable future, with a special focus on African contexts.
        </p>
      </section>
      <section className="my-8 text-center">
        <h2 className="text-4xl font-semibold text-blue-900">Our Mission</h2>
        <p className="mt-4 text-gray-700 max-w-prose mx-auto">
          To empower individuals and communities with the knowledge and tools needed to tackle climate change effectively. By providing an immersive educational experience, we aim to inspire proactive measures that lead to a more resilient and sustainable world.
        </p>
      </section>
    </main>
  );
};

export default About;
