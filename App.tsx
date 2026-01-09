
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Key, 
  Settings as SettingsIcon, 
  FileText, 
  ListOrdered, 
  Activity, 
  Menu, 
  X,
  Bell,
  ChevronRight
} from 'lucide-react';

// Components
import Dashboard from './pages/Dashboard';
import Credentials from './pages/Credentials';
import Settings from './pages/Settings';
import Content from './pages/Content';
import Logs from './pages/Logs';

const SidebarItem = ({ icon: Icon, label, path, active }: { icon: any, label: string, path: string, active: boolean }) => (
  <Link 
    to={path}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      active 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
    {active && <ChevronRight size={16} className="ml-auto" />}
  </Link>
);

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => (
  <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-3 flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <button onClick={toggleSidebar} className="lg:hidden p-2 text-slate-600">
        <Menu size={24} />
      </button>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Activity size={18} className="text-white" />
        </div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">AutoPost<span className="text-blue-600">Pro</span></h1>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative">
        <Bell size={20} />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
      <div className="flex items-center space-x-3 border-l border-slate-200 pl-4">
        <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300"></div>
        <div className="hidden sm:block">
          <p className="text-xs font-semibold text-slate-900 leading-tight">Admin User</p>
          <p className="text-[10px] text-slate-500">Professional Plan</p>
        </div>
      </div>
    </div>
  </header>
);

const Sidebar = ({ isOpen, close }: { isOpen: boolean, close: () => void }) => {
  const location = useLocation();
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Key, label: 'Credentials', path: '/credentials' },
    { icon: FileText, label: 'Content Management', path: '/content' },
    { icon: ListOrdered, label: 'Queue & Runs', path: '/queue' },
    { icon: Activity, label: 'Activity Logs', path: '/logs' },
    { icon: SettingsIcon, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-50 lg:hidden" 
          onClick={close}
        />
      )}
      
      {/* Sidebar Content */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:static ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between lg:hidden mb-8">
            <h2 className="text-lg font-bold">Menu</h2>
            <button onClick={close}><X size={24} /></button>
          </div>
          
          <nav className="space-y-1 flex-grow">
            {menuItems.map((item) => (
              <SidebarItem 
                key={item.path} 
                {...item} 
                active={location.pathname === item.path} 
              />
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-slate-100">
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Usage</p>
              <div className="h-1.5 w-full bg-slate-200 rounded-full mb-2">
                <div className="h-1.5 w-[65%] bg-blue-500 rounded-full"></div>
              </div>
              <p className="text-xs text-slate-600 font-medium">65 / 100 Monthly Posts</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HashRouter>
      <div className="flex h-screen bg-slate-50">
        <Sidebar isOpen={isSidebarOpen} close={() => setSidebarOpen(false)} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
          <main className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/credentials" element={<Credentials />} />
                <Route path="/content" element={<Content />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/logs" element={<Logs />} />
                <Route path="/queue" element={<div className="bg-white p-6 rounded-xl shadow-sm"><h2 className="text-xl font-bold mb-4">Post Queue</h2><p>Coming Soon...</p></div>} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
