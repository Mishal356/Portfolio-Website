import React from 'react';
import ServiceList from '../components/ServiceList';

function Service() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <ServiceList />
    </div>
  );
}

export default Service;
