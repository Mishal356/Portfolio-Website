import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="bg-blue-500">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-2xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6">
          <li><Link className="text-white hover:text-gray-200" to="/">Home</Link></li>
          <li><Link className="text-white hover:text-gray-200" to="/about">About</Link></li>
          <li><Link className="text-white hover:text-gray-200" to="/blog">Blog</Link></li>
          <li><Link className="text-white hover:text-gray-200" to="/service">Services</Link></li>
          <li><Link className="text-white hover:text-gray-200" to="/contact">Contact</Link></li>
          <li><Link className="text-white hover:text-gray-200" to="/dashboard">Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
