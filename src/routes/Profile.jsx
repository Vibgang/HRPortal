import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  // Mock user profile for testing
  const mockProfile = {
    name: 'Test User',
    email: 'test@gmail.com',
    dob: '1995-06-15',
    joinedDate: '2021-01-01',
    experience: '2 years',
    role: 'employee',
    managerId: 2, // ID of the manager
    managerName: 'John Manager',
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Profile</h2>
      <p><strong>Name:</strong> {mockProfile.name}</p>
      <p><strong>Email:</strong> {mockProfile.email}</p>
      <p><strong>Date of Birth:</strong> {mockProfile.dob}</p>
      <p><strong>Joined Date:</strong> {mockProfile.joinedDate}</p>
      <p><strong>Experience:</strong> {mockProfile.experience}</p>
      <p><strong>Role:</strong> {mockProfile.role}</p>
      <p><strong>Team Lead:</strong> {mockProfile.managerName}</p>
    </div>
  );
};

export default Profile;
