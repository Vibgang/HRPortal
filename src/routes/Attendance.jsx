import React from 'react';
import { Alert, AlertDescription } from '../components/ui/alert';

const AttendanceTab = ({ canViewTeam, canViewAll }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Time & Attendance</h2>
    {canViewTeam && (
      <Alert className="mb-4">
        <AlertDescription>
          You have access to view {canViewAll ? 'all employees' : 'your team\'s'} attendance records.
        </AlertDescription>
      </Alert>
    )}
    {/* Add attendance tracking UI here */}
    <p>Attendance tracking functionality coming soon.</p>
  </div>
);

export default AttendanceTab;
