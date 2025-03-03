"use client";
import { useState } from 'react';

const CURRENT_VERSION = "1.0.0";

export default function VersionBadge() {
  const [showChangelog, setShowChangelog] = useState(false);
  
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button 
        onClick={() => setShowChangelog(!showChangelog)}
        className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center"
      >
        <span className="animate-pulse mr-1">●</span>
        v{CURRENT_VERSION}
      </button>
      
      {showChangelog && (
        <div className="absolute bottom-10 right-0 w-80 bg-white rounded-lg shadow-xl p-4 border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800">What's New</h3>
            <button 
              onClick={() => setShowChangelog(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500 text-center">
            BusGo is under constant improvement. Check back regularly for updates!
          </div>
        </div>
      )}
    </div>
  );
} 