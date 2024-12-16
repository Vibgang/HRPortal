import React from 'react';

export const Alert = ({ children, className }) => (
  <div className={`p-4 border rounded-lg bg-blue-50 border-blue-300 ${className}`}>
    {children}
  </div>
);

export const AlertDescription = ({ children }) => (
  <p className="text-sm text-blue-700">{children}</p>
);
