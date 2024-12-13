import React from "react";

const NavItem = ({ icon, label, id, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(id)}
    className={`flex items-center w-full p-2 rounded-lg text-left ${
      activeTab === id ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
    }`}
  >
    {React.cloneElement(icon, { className: "w-5 h-5 mr-2" })}
    {label}
  </button>
);

export default NavItem;
