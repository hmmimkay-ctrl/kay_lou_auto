
import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock, 
  ArrowUpRight,
  Youtube,
  Instagram,
  Facebook,
  CheckCircle2,
  Clock4,
  FileText
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', posts: 12 },
  { name: 'Tue', posts: 19 },
  { name: 'Wed', posts: 15 },
  { name: 'Thu', posts: 22 },
  { name: 'Fri', posts: 30 },
  { name: 'Sat', posts: 10 },
  { name: 'Sun', posts: 8 },
];

const StatCard = ({ title, value, trend, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      <span className="flex items-center text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
        <TrendingUp size={14} className="mr-1" /> {trend}
      </span>
    </div>
    <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
  </div>
);

const RecentActivity = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
      <h3 className="font-bold text-slate-900">Recent Runs</h3>
      <button className="text-blue-600 text-sm font-semibold hover:underline">View All</button>
    </div>
    <div className="divide-y divide-slate-100">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <CheckCircle2 className="text-emerald-500" size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Daily Cron Triggered</p>
              <p className="text-xs text-slate-500">24 content items processed • 2h ago</p>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 text-[10px] font-bold text-slate-600 uppercase">
              Success
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const UpcomingSchedule = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
    <div className="p-6 border-b border-slate-100">
      <h3 className="font-bold text-slate-900">Upcoming Schedule</h3>
    </div>
    <div className="p-6 space-y-6">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-red-50 text-red-600 rounded-lg">
          <Youtube size={20} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold text-slate-900">10 Tips for Cloud Native</p>
          <div className="flex items-center text-xs text-slate-500 mt-1">
            <Clock4 size={12} className="mr-1" /> Today, 5:00 PM
          </div>
        </div>
        <button className="text-slate-400 hover:text-slate-600"><ArrowUpRight size={18} /></button>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-pink-50 text-pink-600 rounded-lg">
          <Instagram size={20} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold text-slate-900">New Office Tour (Reels)</p>
          <div className="flex items-center text-xs text-slate-500 mt-1">
            <Clock4 size={12} className="mr-1" /> Today, 7:30 PM
          </div>
        </div>
        <button className="text-slate-400 hover:text-slate-600"><ArrowUpRight size={18} /></button>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Enterprise Dashboard</h1>
          <p className="text-slate-500">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center shadow-sm">
            <Clock size={18} className="mr-2" /> History
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center shadow-lg shadow-blue-200">
            <TrendingUp size={18} className="mr-2" /> Manual Sync
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Posts" value="1,284" trend="+12.5%" icon={BarChart3} color="bg-blue-600" />
        <StatCard title="Active Campaigns" value="14" trend="+4.2%" icon={FileText} color="bg-indigo-600" />
        <StatCard title="Platform Reach" value="48.2k" trend="+18.7%" icon={Users} color="bg-violet-600" />
        <StatCard title="Sync Health" value="99.8%" trend="Stable" icon={CheckCircle2} color="bg-emerald-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-slate-900">Post Distribution (Last 7 Days)</h3>
              <select className="bg-slate-50 border-none text-sm font-medium rounded-lg px-3 py-1 text-slate-600">
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}} 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                  />
                  <Bar dataKey="posts" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <RecentActivity />
        </div>
        <div className="space-y-8">
          <UpcomingSchedule />
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white shadow-xl shadow-blue-100">
            <h4 className="font-bold text-lg mb-2">Cloud Auto-Sync</h4>
            <p className="text-blue-100 text-sm mb-6">Your content is currently being synced from 3 Google Sheets every 6 hours.</p>
            <button className="w-full py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-semibold transition-colors">
              Manage Sources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
