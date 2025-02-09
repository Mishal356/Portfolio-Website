// src/pages/About.jsx
import React from 'react';
import TeamList from '../components/TeamList';

function About() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
      <p className="text-center text-gray-700 mb-10">
        We are a passionate team dedicated to delivering the best services to our clients.
      </p>
      <h3 className="text-2xl font-bold text-center mb-6">Our Team</h3>
      <TeamList />
    </div>
  );
}

export default About;
