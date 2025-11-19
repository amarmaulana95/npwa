import React from 'react';
import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-5 mb-4">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">NK</div>
          <div>
            <h1 className="font-bold text-xl">NINDYA KARYA</h1>
            <p className="text-sm text-gray-500">ERP Sync Connect</p>
          </div>
        </div>
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;