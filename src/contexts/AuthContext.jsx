// // src/contexts/AuthContext.js
// import React, { createContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);

//   useEffect(() => {
//     // Load user from localStorage if exists
//     const loggedInUser = JSON.parse(localStorage.getItem('user'));
//     if (loggedInUser) {
//       setUser(loggedInUser);
//       setRole(loggedInUser.role); // Assume role is included in the user data
//     }
//   }, []);

//   const login = (email, password) => {
//     // Mock login: Check for test user (You can enhance this logic later)
//     if (email === 'test@gmail.com' && password === 'test') {
//       const loggedInUser = { name: 'Test User', email, role: 'employee' }; // Simulating a role
//       setUser(loggedInUser);
//       setRole('employee');
//       localStorage.setItem('user', JSON.stringify(loggedInUser));
//       return true;
//     }
//     return false;  // Return false if login fails
//   };

//   const logout = () => {
//     setUser(null);
//     setRole(null);
//     localStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, role, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return React.useContext(AuthContext);
// };

import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Mock user profile
  const mockUser = {
    id: 1,
    name: 'Test User',
    email: 'test@gmail.com',
    role: 'employee',
    managerId: 2, // Manager ID
  };

  const [user, setUser] = useState(mockUser); // Preloaded mock user for testing
  const [role, setRole] = useState(mockUser.role);

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
