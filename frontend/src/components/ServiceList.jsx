import React from 'react';

function ServiceList({ services }) {
  // Dummy data if no props provided
  const dummyServices = [
    {
      _id: '1',
      title: 'Web Development',
      description: 'Building responsive and dynamic websites.',
      icon: '🌐', // You can use actual icons in a real app
    },
    {
      _id: '2',
      title: 'Graphic Design',
      description: 'Creating stunning visuals and graphics.',
      icon: '🎨',
    },
    {
      _id: '3',
      title: 'Digital Marketing',
      description: 'Promoting your brand effectively online.',
      icon: '💡',
    },
  ];

  const serviceData = services && services.length > 0 ? services : dummyServices;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {serviceData.map((service) => (
        <div key={service._id} className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-5xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-700">{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ServiceList;
