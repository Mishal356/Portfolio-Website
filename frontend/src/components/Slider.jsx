// src/components/Slider.jsx
import React from 'react';

function Slider() {
  return (
    <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x400)' }}>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to My Portfolio</h1>
      </div>
    </div>
  );
}

export default Slider;
