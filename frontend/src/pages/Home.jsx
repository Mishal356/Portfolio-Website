// src/pages/Home.jsx
import React from 'react';
import Slider from '../components/Slider';
import BlogList from '../components/BlogList';

function Home() {
  // For now, we're not fetching real data
  return (
    <div>
      <Slider />
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
        <BlogList />
      </div>
    </div>
  );
}

export default Home;
