import React from "react";
import ProfileTab from "../routes/Profile";
import AttendanceTab from "../routes/Attendance";
import LeaveTab from "../routes/Leave";
import PerformanceTab from "../routes/Performance";
import TrainingTab from "../routes/Training";
import { useAuth } from "../contexts/AuthContext";

const ContentArea = ({ activeTab }) => {
  const { user, role } = useAuth();
  const canViewTeam = role === "manager" || role === "hr";
  const canViewAll = role === "hr";

  return (
    <div className="flex-1 p-8">
      {activeTab === "profile" && <ProfileTab user={user} />}
      {activeTab === "attendance" && <AttendanceTab canViewTeam={canViewTeam} canViewAll={canViewAll} />}
      {activeTab === "leave" && <LeaveTab canViewTeam={canViewTeam} canViewAll={canViewAll} />}
      {activeTab === "performance" && <PerformanceTab canViewTeam={canViewTeam} canViewAll={canViewAll} />}
      {activeTab === "training" && <TrainingTab />}
    </div>
  );
};

export default ContentArea;
