import React from 'react';
import PageHeader from './PageHeader';

const ChatbotPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-green-50">
      <PageHeader title="AI Farming Assistant" onBack={onBack} />
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-lg space-y-4">
          <div className="bg-green-50 p-3 rounded-lg">
            How can I help you with farming today?
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((msg) => (
              <div key={msg} className="p-3 bg-gray-50 rounded-lg">
                Sample conversation {msg}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Ask about crops, techniques, or get advice..."
              className="flex-1 p-2 border rounded-lg"
            />
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
