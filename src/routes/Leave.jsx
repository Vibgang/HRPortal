import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert, AlertDescription } from '../components/ui/alert';

const Leave = ({ userRole, userId, managerId }) => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [newLeave, setNewLeave] = useState({ start_date: '', end_date: '', reason: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch leave requests based on role
  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const fetchLeaveRequests = async () => {
    setIsLoading(true);
    try {
      let response;
      if (userRole === 'employee') {
        response = await axios.get(`/leaves/employee/${userId}`);
      } else if (userRole === 'manager') {
        response = await axios.get(`/leaves/team/${managerId}`);
      } else if (userRole === 'hr') {
        response = await axios.get('/leaves/all');
      }
      setLeaveRequests(response.data);
    } catch (err) {
      setError('Failed to load leave requests. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequestLeave = async () => {
    try {
      const response = await axios.post('/leaves/request', {
        employee_id: userId,
        ...newLeave,
      });
      alert(response.data.message);

      fetchLeaveRequests(); // Refresh leave list
    } catch (err) {
      setError('Failed to submit leave request. Please try again.');
    }
  };

  const handleReviewLeave = async (leaveId, status) => {
    try {
      const response = await axios.post(`/leaves/review/${leaveId}`, { status });
      alert(response.data.message);
      fetchLeaveRequests(); // Refresh leave list
    } catch (err) {
      setError('Failed to review leave. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Leave Management</h2>
      {error && <Alert>{error}</Alert>}

      {userRole === 'employee' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Request Leave</h3>
          <input
            type="date"
            value={newLeave.start_date}
            onChange={(e) => setNewLeave({ ...newLeave, start_date: e.target.value })}
            placeholder="Start Date"
            required
          />
          <input
            type="date"
            value={newLeave.end_date}
            onChange={(e) => setNewLeave({ ...newLeave, end_date: e.target.value })}
            placeholder="End Date"
            required
          />
          <textarea
            value={newLeave.reason}
            onChange={(e) => setNewLeave({ ...newLeave, reason: e.target.value })}
            placeholder="Reason"
            required
          />
          <button onClick={handleRequestLeave} className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit Leave Request
          </button>
        </div>
      )}

      {isLoading ? (
        <p>Loading leave requests...</p>
      ) : (
        <div>
          <h3 className="text-lg font-semibold">Leave Requests</h3>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Reason</th>
                <th>Status</th>
                {(userRole === 'manager' || userRole === 'hr') && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.employee_name || 'N/A'}</td>
                  <td>{leave.start_date}</td>
                  <td>{leave.end_date}</td>
                  <td>{leave.reason}</td>
                  <td>{leave.status}</td>
                  {(userRole === 'manager' || userRole === 'hr') && (
                    <td>
                      {leave.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleReviewLeave(leave.id, 'approved')}
                            className="bg-green-600 text-white px-2 py-1 rounded"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleReviewLeave(leave.id, 'rejected')}
                            className="bg-red-600 text-white px-2 py-1 rounded"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Leave;



// import React from 'react';
// import { Alert, AlertDescription } from '../components/ui/alert';

// const LeaveTab = ({ canViewTeam, canViewAll }) => (
//   <div className="space-y-6">
//     <h2 className="text-2xl font-bold">Leave Management</h2>
//     {canViewTeam && (
//       <Alert className="mb-4">
//         <AlertDescription>
//           You can manage {canViewAll ? 'all' : 'your team\'s'} leave requests.
//         </AlertDescription>
//       </Alert>
//     )}
//     {/* Add leave management UI here */}
//     <p>Leave management functionality coming soon.</p>
//   </div>
// );

// export default LeaveTab;
