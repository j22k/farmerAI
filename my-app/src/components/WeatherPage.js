import React from 'react';
import PageHeader from './PageHeader';
import { Cloud, Sun, CloudRain } from 'lucide-react';

const WeatherPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-blue-50">
      <PageHeader title="Weather Updates" onBack={onBack} />
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
          <Sun size={48} className="text-yellow-500" />
          <div>
            <h2 className="text-lg font-semibold">Current Weather</h2>
            <p className="text-gray-600">Sunny, 28°C</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
          <Cloud size={48} className="text-gray-400" />
          <div>
            <h2 className="text-lg font-semibold">Tomorrow</h2>
            <p className="text-gray-600">Cloudy, 25°C</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
          <CloudRain size={48} className="text-blue-400" />
          <div>
            <h2 className="text-lg font-semibold">Day After Tomorrow</h2>
            <p className="text-gray-600">Rainy, 22°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
