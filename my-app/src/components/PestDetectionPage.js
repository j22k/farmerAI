import React from 'react';
import { Card, CardContent } from './ui/card'; // Ensure this path is correct
import { Camera } from 'lucide-react';

const PestDetectionPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 to-brown-600 p-8">
      <button onClick={onBack} className="bg-green-700 text-white px-6 py-3 rounded-lg mb-4">
        Back
      </button>
      <div className="flex justify-center items-center">
        <Card>
          <CardContent className="p-4 flex flex-col items-center">
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <Camera size={48} className="text-gray-400" />
            </div>
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg">
              Open Camera
            </button>
            <p className="mt-4 text-gray-600 text-center">
              Point your camera at the affected area to detect pests and get treatment recommendations
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


export default PestDetectionPage;