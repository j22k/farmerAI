import React from 'react';

const Alert = ({ children, variant = 'info', className = '' }) => {
  const alertStyles = {
    info: 'bg-blue-100 text-blue-700',
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    warning: 'bg-amber-50 text-amber-700',
  };

  return (
    <div className={`p-4 rounded ${alertStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

const AlertTitle = ({ children }) => (
  <h4 className="font-bold mb-1">{children}</h4>
);

const AlertDescription = ({ children }) => (
  <p>{children}</p>
);

export { Alert, AlertTitle, AlertDescription };