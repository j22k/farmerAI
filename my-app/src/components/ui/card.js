import React from 'react';

const Card = ({ title, children }) => (
  <div className="p-4 shadow-md rounded bg-white">
    {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`card-content ${className}`}>
    {children}
  </div>
);

export { Card, CardContent };