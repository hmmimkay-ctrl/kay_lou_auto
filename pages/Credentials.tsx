
import React from 'react';
import { Youtube, Instagram, Facebook, Link as LinkIcon, ShieldCheck, AlertCircle } from 'lucide-react';

const PlatformCard = ({ platform, icon: Icon, color, status }: any) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
    <div className="flex items-center justify-between mb-6">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      <span className={`flex items-center text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
        status === 'Connected' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
      }`}>
        {status}
      </span>
    </div>
    <h3 className="font-bold text-slate-900 text-lg mb-1">{platform}</h3>
    <p className="text-slate-500 text-sm mb-6">Manage API tokens and scopes for {platform} publishing.</p>
    
    <div className="space-y-4">
      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Client ID</label>
        <p className="text-sm font-mono text-slate-700 truncate">•••••••••••••••••7249</p>
      </div>
      <button className="w-full py-2.5 px-4 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all flex items-center justify-center">
        <LinkIcon size={16} className="mr-2" /> Reconnect Account
      </button>
    </div>
  </div>
);

const Credentials = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Platform Credentials</h1>
        <p className="text-slate-500">Securely connect your social media accounts and cloud services.</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start space-x-3">
        <AlertCircle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="text-sm font-bold text-amber-900">OAUTH Notice</h4>
          <p className="text-sm text-amber-700">Google and Meta require valid SSL endpoints for redirects. Ensure your Vercel deployment URL is whitelisted in their developer consoles.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PlatformCard platform="YouTube" icon={Youtube} color="bg-red-600" status="Connected" />
        <PlatformCard platform="Instagram" icon={Instagram} color="bg-pink-600" status="Pending" />
        <PlatformCard platform="Facebook" icon={Facebook} color="bg-blue-700" status="Connected" />
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center space-x-3 mb-6">
          <ShieldCheck className="text-blue-600" size={24} />
          <h2 className="text-xl font-bold">Cloud Security Configuration</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">Supabase Connection</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Project URL</label>
                <input 
                  type="text" 
                  readOnly 
                  value="https://xyz.supabase.co" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-600"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Service Role Key</label>
                <input 
                  type="password" 
                  readOnly 
                  value="secret_key_here" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-600"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">Advanced Storage Settings</h4>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-sm text-slate-600 leading-relaxed">
                By default, AutoPost Pro uses Supabase Buckets to store transient media. Ensure your bucket policy allows the `authenticated` role to read and write.
              </p>
              <button className="mt-4 text-blue-600 font-semibold text-sm hover:underline">View Storage Documentation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
