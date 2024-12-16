import React from 'react';
import { Alert, AlertDescription } from '../components/ui/alert';

const PerformanceTab = ({ canViewTeam, canViewAll }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Performance Management</h2>
    {canViewTeam && (
      <Alert className="mb-4">
        <AlertDescription>
          You can view and manage {canViewAll ? 'all employees\'' : 'your team\'s'} performance.
        </AlertDescription>
      </Alert>
    )}
    {/* Add performance management UI here */}
    <p>Performance management functionality coming soon.</p>
  </div>
);

export default PerformanceTab;
