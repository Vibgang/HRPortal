// src/components/Dashboard.jsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Navigation from './Navigation';  // Assuming you have this component
import ContentArea from './ContentArea';  // Assuming this component is there

const Dashboard = () => {
  const { user, role} = useAuth();

  const roleText = role ? role.toUpperCase() : 'N/A';

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <Navigation />

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Welcome, {user ? user.name : 'User'}</h1>
        <p className="text-lg mb-4">Your role: {roleText}</p>

        {/* Content Area */}
        <ContentArea />

        {/* <button
          onClick={logout}
          className="mt-8 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button> */}
      </div>
    </div>
  );
};

export default Dashboard;
