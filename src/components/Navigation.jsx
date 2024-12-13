// import React from "react";
// import { LogOut, User, Calendar, FileText, Award, BookOpen } from "lucide-react";
// import NavItem from "./NavItem";
// import { useAuth } from '../contexts/AuthContext';

// const Navigation = ({ activeTab, setActiveTab }) => {
//   const { user, role, logout } = useAuth();

//   return (
//     <div className="w-64 bg-gray-800 min-h-screen p-4">
//       <div className="text-white mb-8">
//         <h2 className="text-xl font-bold">{user?.name || "Guest"}</h2>
//         <p className="text-sm text-gray-400">{role}</p>
//       </div>
//       <nav className="space-y-2">
//         <NavItem icon={<User />} label="Profile" id="profile" activeTab={activeTab} setActiveTab={setActiveTab} />
//         <NavItem icon={<Calendar />} label="Time & Attendance" id="attendance" activeTab={activeTab} setActiveTab={setActiveTab} />
//         <NavItem icon={<FileText />} label="Leave Management" id="leave" activeTab={activeTab} setActiveTab={setActiveTab} />
//         <NavItem icon={<Award />} label="Performance" id="performance" activeTab={activeTab} setActiveTab={setActiveTab} />
//         <NavItem icon={<BookOpen />} label="Training" id="training" activeTab={activeTab} setActiveTab={setActiveTab} />
//       </nav>
//       <button onClick={logout} className="flex items-center text-white mt-8 hover:text-gray-300">
//         <LogOut className="w-5 h-5 mr-2" />
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Navigation;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Leave from '../routes/Leave';
import Profile from '../routes/Profile'; // Import other components as needed

const AppRoutes = () => {
  const { user, role } = useAuth(); // Assume `useAuth` gives role and user info

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leave" element={<Leave userRole={role} userId={user.id} managerId={user.managerId} />} />
      {/* Add routes for other tabs */}
    </Routes>
  );
};

export default AppRoutes;
