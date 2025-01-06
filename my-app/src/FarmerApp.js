import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import ChatbotPage from './components/ChatbotPage';
import NewsPage from './components/NewsPage';
import PestDetectionPage from './components/PestDetectionPage';
import WeatherPage from './components/WeatherPage';
import CommunityPage from './components/CommunityPage';
import DesktopIcon from './components/DesktopIcon';
import { Sprout, Newspaper, Camera, Cloud, Users } from 'lucide-react'; // Import additional icons
import './App.css'; // Ensure you import your CSS file

const FarmerApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('desktop');

  if (!isLoggedIn) {
    return <WelcomePage onEnter={() => setIsLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'chatbot':
        return <ChatbotPage onBack={() => setCurrentPage('desktop')} />;
      case 'news':
        return <NewsPage onBack={() => setCurrentPage('desktop')} />;
      case 'camera':
        return <PestDetectionPage onBack={() => setCurrentPage('desktop')} />;
      case 'weather':
        return <WeatherPage onBack={() => setCurrentPage('desktop')} />;
      case 'chat':
        return <CommunityPage onBack={() => setCurrentPage('desktop')} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-green-800 to-brown-600 p-8">
            <div className="grid grid-cols-4 gap-4">
              <DesktopIcon 
                icon={<Sprout size={32} className="text-white" />} 
                label="Assistant" 
                onClick={() => setCurrentPage('chatbot')} 
              />
              <DesktopIcon 
                icon={<Newspaper size={32} className="text-white" />} 
                label="News" 
                onClick={() => setCurrentPage('news')} 
              />
              <DesktopIcon 
                icon={<Camera size={32} className="text-white" />} 
                label="Camera" 
                onClick={() => setCurrentPage('camera')} 
              />
              <DesktopIcon 
                icon={<Cloud size={32} className="text-white" />} 
                label="Weather" 
                onClick={() => setCurrentPage('weather')} 
              />
              <DesktopIcon 
                icon={<Users size={32} className="text-white" />} 
                label="Community" 
                onClick={() => setCurrentPage('chat')} 
              />
            </div>
          </div>
        );
    }
  };

  return renderPage();
};

export default FarmerApp;