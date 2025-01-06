import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PageHeader = ({ title, onBack }) => {
  return (
    <div className="bg-green-800 text-white p-4 flex items-center gap-4">
      <button onClick={onBack} className="hover:bg-green-700 p-2 rounded-lg">
        <ArrowLeft size={24} />
      </button>
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
};

export default PageHeader;
