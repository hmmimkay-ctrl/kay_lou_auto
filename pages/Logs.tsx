
import React, { useState, useEffect } from 'react';
import { Terminal, Trash2, Search, Download, RefreshCw, Info, AlertTriangle, XCircle } from 'lucide-react';

const Logs = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    const initialLogs = [
      { id: 1, type: 'INFO', time: '12:00:01', msg: 'Cron triggered: STARTING_DAILY_SYNC' },
      { id: 2, type: 'INFO', time: '12:00:05', msg: 'Fetching content from Google Sheet: LaunchSheet_v2' },
      { id: 3, type: 'SUCCESS', time: '12:00:10', msg: 'Sync complete. 4 items added, 0 items updated.' },
      { id: 4, type: 'INFO', time: '12:15:00', msg: 'Processing Item ID: CN-10293 (YouTube Upload)' },
      { id: 5, type: 'WARNING', time: '12:15:30', msg: 'Slow response from YouTube Data API (v3). Retrying...' },
      { id: 6, type: 'SUCCESS', time: '12:16:12', msg: 'Successfully uploaded: 10 Tips for Cloud Native' },
    ];
    setLogs(initialLogs);

    const interval = setInterval(() => {
      const newLog = {
        id: Date.now(),
        type: Math.random() > 0.8 ? 'ERROR' : 'INFO',
        time: new Date().toLocaleTimeString([], { hour12: false }),
        msg: `Heartbeat Check: Worker Node ${Math.floor(Math.random() * 5)} is alive and polling.`
      };
      setLogs(prev => [newLog, ...prev].slice(0, 50));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getTypeStyle = (type: string) => {
    switch(type) {
      case 'SUCCESS': return 'text-emerald-500 bg-emerald-500/10';
      case 'ERROR': return 'text-rose-500 bg-rose-500/10';
      case 'WARNING': return 'text-amber-500 bg-amber-500/10';
      default: return 'text-blue-500 bg-blue-500/10';
    }
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'SUCCESS': return <RefreshCw size={14} />;
      case 'ERROR': return <XCircle size={14} />;
      case 'WARNING': return <AlertTriangle size={14} />;
      default: return <Info size={14} />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 h-[calc(100vh-140px)] flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Live Activity Logs</h1>
          <p className="text-slate-500">Real-time system health and posting event stream.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg"><Download size={18} /></button>
          <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg"><Trash2 size={18} /></button>
        </div>
      </div>

      <div className="flex-1 bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-800">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5 mr-4">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="flex space-x-1">
              {['ALL', 'INFO', 'ERROR', 'SUCCESS'].map(t => (
                <button 
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-colors ${
                    filter === t ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-600" size={14} />
            <input 
              type="text" 
              placeholder="Filter by message..." 
              className="bg-slate-800 border-none rounded-md pl-8 pr-4 py-1.5 text-xs text-slate-300 w-48 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed scrollbar-thin scrollbar-thumb-slate-700">
          {logs
            .filter(l => filter === 'ALL' || l.type === filter)
            .map((log) => (
            <div key={log.id} className="group flex items-start space-x-3 py-1.5 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded transition-colors">
              <span className="text-slate-600 shrink-0 select-none">[{log.time}]</span>
              <span className={`px-1.5 rounded shrink-0 font-bold text-[10px] flex items-center space-x-1 ${getTypeStyle(log.type)}`}>
                {getIcon(log.type)}
                <span>{log.type}</span>
              </span>
              <span className="text-slate-300 group-hover:text-white transition-colors">{log.msg}</span>
            </div>
          ))}
          {logs.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-3">
              <Terminal size={48} className="opacity-20" />
              <p>Waiting for incoming logs...</p>
            </div>
          )}
        </div>
        
        <div className="px-4 py-2 bg-slate-800/50 border-t border-slate-800 flex items-center justify-between">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Session ID: AWS-POST-CLOUD-8891</p>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase">System Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
