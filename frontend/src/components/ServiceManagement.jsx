import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function ServiceManagement() {
  const { token } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ title: '', description: '', icon: '' });
  const [error, setError] = useState('');

  // Function to fetch services from the backend
  const fetchServices = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/services`)
      .then((response) => {
        setServices(response.data);
      })
      .catch((err) => {
        console.error('Error fetching services:', err);
        setError('Failed to fetch services.');
      });
  };

  // Fetch services on component mount
  useEffect(() => {
    fetchServices();
  }, []);

  // Function to create a new service
  const handleCreate = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/services`, newService, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setNewService({ title: '', description: '', icon: '' });
        fetchServices();
      })
      .catch((err) => {
        console.error('Error creating service:', err);
        setError('Failed to create service.');
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Services</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {/* Form to create a new service */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Create New Service</h3>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border mb-2"
          value={newService.title}
          onChange={(e) => setNewService({ ...newService, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Icon (e.g., 🌐)"
          className="w-full p-2 border mb-2"
          value={newService.icon}
          onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border mb-2"
          value={newService.description}
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCreate}>
          Create Service
        </button>
      </div>
      {/* List of existing services */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Existing Services</h3>
        {services.map((service) => (
          <div key={service._id} className="border-b mb-4 pb-4">
            <h4 className="text-lg font-bold">{service.title} {service.icon}</h4>
            <p>{service.description}</p>
            {/* Edit and Delete functionality can be implemented here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceManagement;
