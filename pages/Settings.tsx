
import React from 'react';
import { Save, Bell, Globe, Clock, Shield, Database, Zap } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">System Settings</h1>
          <p className="text-slate-500">Configure global application behavior and automation rules.</p>
        </div>
        <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all flex items-center shadow-lg shadow-blue-200">
          <Save size={18} className="mr-2" /> Save All Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
          <nav className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 space-y-1">
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-sm">
              <Globe size={18} /> <span>General Configuration</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-semibold text-sm transition-colors">
              <Clock size={18} /> <span>Scheduling Policy</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-semibold text-sm transition-colors">
              <Bell size={18} /> <span>Notifications</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-semibold text-sm transition-colors">
              <Shield size={18} /> <span>API Access & Roles</span>
            </button>
          </nav>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl border border-blue-100">
            <div className="flex items-center space-x-2 text-blue-600 mb-3">
              <Database size={20} />
              <h4 className="font-bold">Database Status</h4>
            </div>
            <p className="text-slate-600 text-xs mb-4">You are currently using 14.2MB of 500MB storage in Supabase.</p>
            <div className="h-2 w-full bg-blue-200/50 rounded-full mb-4">
              <div className="h-2 w-[5%] bg-blue-600 rounded-full"></div>
            </div>
            <button className="text-blue-700 text-xs font-bold hover:underline">View Analytics</button>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <Clock className="mr-2 text-blue-600" size={20} /> Regional & Timezone
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Default Timezone</label>
                <select className="w-full bg-slate-50 border-slate-200 rounded-lg px-4 py-2 text-sm">
                  <option>UTC (Coordinated Universal Time)</option>
                  <option>EST (Eastern Standard Time)</option>
                  <option>PST (Pacific Standard Time)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Date Format</label>
                <select className="w-full bg-slate-50 border-slate-200 rounded-lg px-4 py-2 text-sm">
                  <option>YYYY-MM-DD</option>
                  <option>MM/DD/YYYY</option>
                  <option>DD-MM-YYYY</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <Zap className="mr-2 text-amber-500" size={20} /> Automation Triggers
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Auto-Approve Content</h4>
                  <p className="text-xs text-slate-500">Automatically mark synced sheet items as "Approved" if all fields are present.</p>
                </div>
                <div className="w-12 h-6 bg-slate-300 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Email Reports</h4>
                  <p className="text-xs text-slate-500">Send a summary of daily runs to the administrator email.</p>
                </div>
                <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border-2 border-blue-100 shadow-sm">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Strict Rate Limiting</h4>
                  <p className="text-xs text-slate-500">Adhere strictly to platform-specific posting quotas to avoid API shadow-banning.</p>
                </div>
                <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
