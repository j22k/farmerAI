import React, { useState } from 'react';
import PageHeader from './PageHeader';

const CommunityPage = ({ onBack }) => {
  const [messages, setMessages] = useState([
    { user: 'Farmer Joe', text: 'How do you manage pests in your field?' },
    { user: 'Sarah', text: 'I use organic pesticides; they work great for me!' },
  ]);

  const [inputMessage, setInputMessage] = useState('');

  const handleSend = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { user: 'You', text: inputMessage }]);
      setInputMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Community Chat" onBack={onBack} />
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md h-96 overflow-y-auto space-y-2">
          {messages.map((message, index) => (
            <div key={index} className="p-2">
              <strong>{message.user}: </strong>
              <span>{message.text}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input 
            type="text" 
            value={inputMessage} 
            onChange={(e) => setInputMessage(e.target.value)} 
            placeholder="Type your message..." 
            className="flex-1 p-2 border rounded-lg"
          />
          <button 
            onClick={handleSend} 
            className="bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
