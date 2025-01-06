import React from 'react';

const DesktopIcon = ({ icon, label, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="flex flex-col items-center p-4 rounded-lg hover:bg-white/10 transition-colors w-24"
    >
      <div className="bg-white/20 p-3 rounded-lg mb-2">
        {icon}
      </div>
      <span className="text-white text-sm text-center">{label}</span>
    </button>
  );
};

export default DesktopIcon;
