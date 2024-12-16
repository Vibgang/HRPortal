import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Navigation from '../components/Navigation';
import ContentArea from '../components/ContentArea';

// Mock data
const mockData = {
  announcements: [
    { id: 1, type: 'birthday', message: "🎉 Today is Rahul Kumar's birthday!", date: '2024-12-16' },
    { id: 2, type: 'holiday', message: "🎄 Office closed for Christmas", date: '2024-12-25' },
    { id: 3, type: 'general', message: "📢 Team building event next Friday!", date: '2024-12-20' }
  ],
  holidays: [
    { date: '2024-12-25', name: 'Christmas Day' },
    { date: '2025-01-01', name: 'New Year\'s Day' }
  ],
  teamMetrics: {
    attendance: 95,
    projectCompletion: 88,
    teamSize: 12
  },
  upcomingLeave: [
    { name: 'John Doe', startDate: '2024-12-20', endDate: '2024-12-24' },
    { name: 'Jane Smith', startDate: '2024-12-27', endDate: '2024-12-31' }
  ]
};

const Dashboard = () => {
  const { user, role } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");

  // Common dashboard components for all roles
  const AnnouncementsSection = () => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Announcements</h2>
      <div className="space-y-4">
        {mockData.announcements.map(announcement => (
          <div 
            key={announcement.id} 
            className="border-l-4 border-blue-500 p-4 bg-blue-50 rounded-r"
          >
            <div className="font-semibold">{announcement.date}</div>
            <div className="text-gray-700">{announcement.message}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const CalendarSection = () => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span>📅</span> Upcoming Holidays
      </h2>
      <div className="space-y-2">
        {mockData.holidays.map(holiday => (
          <div 
            key={holiday.date} 
            className="flex justify-between items-center p-2 hover:bg-gray-50 rounded"
          >
            <span className="font-medium">{holiday.name}</span>
            <span className="text-gray-500">{holiday.date}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // Manager-specific components
  const TeamMetrics = () => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Team Metrics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded">
          <div className="text-2xl font-bold text-blue-600">
            {mockData.teamMetrics.attendance}%
          </div>
          <div className="text-sm text-gray-600">Attendance</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded">
          <div className="text-2xl font-bold text-green-600">
            {mockData.teamMetrics.projectCompletion}%
          </div>
          <div className="text-sm text-gray-600">Project Completion</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded">
          <div className="text-2xl font-bold text-purple-600">
            {mockData.teamMetrics.teamSize}
          </div>
          <div className="text-sm text-gray-600">Team Size</div>
        </div>
      </div>
    </div>
  );

  // HR-specific components
  const LeaveManagement = () => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Upcoming Leave</h2>
      <div className="space-y-2">
        {mockData.upcomingLeave.map((leave, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center p-2 border-b"
          >
            <span className="font-medium">{leave.name}</span>
            <span className="text-gray-500">
              {leave.startDate} - {leave.endDate}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Welcome, {user?.name || 'User'}</h1>
          <p className="text-lg text-gray-600">Role: {role?.toUpperCase() || 'N/A'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Common sections visible to all roles */}
          <AnnouncementsSection />
          <CalendarSection />

          {/* Manager-specific sections */}
          {role === 'manager' && (
            <>
              <TeamMetrics />
            </>
          )}

          {/* HR-specific sections */}
          {role === 'hr' && (
            <>
              <TeamMetrics />
              <LeaveManagement />
            </>
          )}
        </div>

        {/* Content Area for other tabs */}
        <div className="mt-6">
          <ContentArea activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// // src/components/Dashboard.jsx
// import React, { useState } from 'react';
// import { useAuth } from '../contexts/AuthContext';
// import Navigation from './Navigation';
// import ContentArea from './ContentArea';

// const Dashboard = () => {
//   const { user, role } = useAuth();

//   // State to track the active tab
//   const [activeTab, setActiveTab] = useState("profile");

//   const roleText = role ? role.toUpperCase() : 'N/A';

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar Navigation */}
//       <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

//       {/* Main Content Area */}
//       <div className="flex-1 p-8">
//         <h1 className="text-2xl font-bold">Welcome, {user ? user.name : 'User'}</h1>
//         <p className="text-lg mb-4">Your role: {roleText}</p>

//         {/* Render the content based on the active tab */}
//         <ContentArea activeTab={activeTab} />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
