
import React, { useState } from 'react';
import { Search, Plus, FileSpreadsheet, Filter, MoreVertical, Download, Play, CheckCircle2, Link as LinkIcon } from 'lucide-react';

const ContentTable = () => {
  const content = [
    { id: 1, title: "Product Launch Teaser", source: "LaunchSheet v2", platform: ["YT", "IG"], status: "Approved", date: "2024-05-12" },
    { id: 2, title: "Tutorial: API Integration", source: "Master Course", platform: ["YT"], status: "Draft", date: "2024-05-14" },
    { id: 3, title: "Client Testimonial #4", source: "Marketing Sheet", platform: ["FB", "IG"], status: "Scheduled", date: "2024-05-15" },
    { id: 4, title: "Weekly Dev Vlog #10", source: "LaunchSheet v2", platform: ["YT"], status: "Approved", date: "2024-05-16" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-y border-slate-200">
          <tr>
            <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Source</th>
            <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Platforms</th>
            <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Post Date</th>
            <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {content.map((item) => (
            <tr key={item.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-[10px] text-slate-400">ID: CN-{item.id}0293</p>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <FileSpreadsheet size={16} className="text-emerald-500" />
                  <span>{item.source}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex -space-x-1">
                  {item.platform.map(p => (
                    <div key={p} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] font-bold">
                      {p}
                    </div>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                  item.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' :
                  item.status === 'Scheduled' ? 'bg-blue-50 text-blue-600' :
                  'bg-slate-100 text-slate-500'
                }`}>
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600 font-medium">{item.date}</td>
              <td className="px-6 py-4 text-right">
                <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={18} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Content = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Content Queue</h1>
          <p className="text-slate-500">Sync and manage your content items from external sources.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center">
            <Download size={18} className="mr-2" /> Export
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center shadow-lg shadow-blue-200">
            <Plus size={18} className="mr-2" /> Add Content
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold mb-4">Google Sheet Sources</h3>
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Active Sync</p>
                <p className="text-sm font-semibold text-slate-800">Content Master v1</p>
                <div className="flex items-center text-[10px] text-emerald-600 mt-2">
                  <CheckCircle2 size={12} className="mr-1" /> Last synced 12m ago
                </div>
              </div>
              <button className="w-full py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center">
                <LinkIcon size={16} className="mr-2" /> Connect New Sheet
              </button>
            </div>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-xl">
            <h3 className="font-bold mb-2">Bulk Actions</h3>
            <p className="text-slate-400 text-xs mb-4">Process multiple items at once.</p>
            <div className="space-y-2">
              <button className="w-full py-2 bg-blue-600 rounded-lg text-sm font-semibold flex items-center justify-center">
                <Play size={14} className="mr-2" /> Trigger Run Now
              </button>
              <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-semibold">
                Mark All Approved
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search content titles..." 
                  className="w-full bg-slate-50 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg ml-2">
                <Filter size={18} />
              </button>
            </div>
            <ContentTable />
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <p className="text-xs text-slate-500 font-medium">Showing 4 of 28 items</p>
              <div className="flex items-center space-x-1">
                <button className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-semibold shadow-sm">Prev</button>
                <button className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-semibold shadow-sm">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
