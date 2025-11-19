import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="px-4 mb-3">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search destinations, experiences..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 placeholder-slate-400 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-300 focus:outline-none text-[14px] transition-all shadow-sm"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow">
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;