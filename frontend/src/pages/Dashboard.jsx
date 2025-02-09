// src/pages/Dashboard.jsx
import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

import BlogManagement from '../components/BlogManagement';
import ServiceManagement from '../components/ServiceManagement';
import TeamManagement from '../components/TeamManagement';

function Dashboard() {
  const { logout } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white min-h-screen">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
          <ul className="space-y-4">
            <li><Link to="blogs">Manage Blogs</Link></li>
            <li><Link to="services">Manage Services</Link></li>
            <li><Link to="teams">Manage Teams</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <Routes>
          <Route path="blogs" element={<BlogManagement />} />
          <Route path="services" element={<ServiceManagement />} />
          <Route path="teams" element={<TeamManagement />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
