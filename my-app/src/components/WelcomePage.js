import React, { useState } from 'react';
import { Sprout } from 'lucide-react';

const WelcomePage = ({ onEnter }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEnter = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        onEnter(); // Call the onEnter prop to navigate to FarmerApp
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-600 flex items-center justify-center">
      <div className="text-center space-y-8 p-8 bg-white/10 backdrop-blur-md rounded-2xl max-w-lg w-full">
        <div className="space-y-4">
          <Sprout size={64} className="text-white mx-auto" />
          <h1 className="text-4xl font-bold text-white">FarmConnect</h1>
          <p className="text-green-50 text-lg">Your Complete Digital Farming Companion</p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-green-100 border border-white/30"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder:text-green-100 border border-white/30"
          />
          <button
            onClick={handleEnter}
            className="w-full bg-white text-green-800 p-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Enter FarmConnect
          </button>
        </div>
        <p className="text-green-50">New to FarmConnect? <button className="text-white underline">Sign up</button></p>
      </div>
    </div>
  );
};

export default WelcomePage;