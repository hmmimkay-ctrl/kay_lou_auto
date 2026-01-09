import React from 'react';
import Dashboard from './Dashboard';
import { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'credentials':
        return <div className="p-6">Credentials Page - Coming Soon</div>;
      case 'content':
        return <div className="p-6">Content Page - Coming Soon</div>;
      case 'logs':
        return <div className="p-6">Logs Page - Coming Soon</div>;
      case 'settings':
        return <div className="p-6">Settings Page - Coming Soon</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-slate-900">AutoPost Pro</h1>
            </div>
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'dashboard'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('credentials')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'credentials'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Credentials
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'content'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Content
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'logs'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Logs
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'settings'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Settings
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Home;
