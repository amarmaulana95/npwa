import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Home, Plane, Palmtree, Ship, ChevronRight } from 'lucide-react';

const BrowseByType = () => {
  const [activeCategory, setActiveCategory] = useState('villas'); // default active

  const browseTypes = [
    { label: "Villas", icon: <Home className="w-6 h-6" />, category: "villas", activeClass: "bg-slate-900 text-white shadow-lg hover:shadow-xl" },
    { label: "Flights", icon: <Plane className="w-6 h-6" />, category: "flights", activeClass: "bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-slate-700" },
    { label: "Resorts", icon: <Palmtree className="w-6 h-6" />, category: "resorts", activeClass: "bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-slate-700" },
    { label: "Cruises", icon: <Ship className="w-6 h-6" />, category: "cruises", activeClass: "bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-slate-700" }
  ];

  return (
    <div className="px-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[18px] font-semibold tracking-tight text-slate-900">Browse by type</h2>
        <button className="text-[13px] text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 transition-colors">
          View all
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {browseTypes.map((item) => (
          <button
            key={item.category}
            onClick={() => setActiveCategory(item.category)}
            className={`flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl transition-all ${
              activeCategory === item.category
                ? item.activeClass // active style
                : "bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-slate-700" // inactive style
            }`}
          >
            <div className={`${activeCategory === item.category ? "text-white" : "text-slate-700"}`}>
              {item.icon}
            </div>
            <span className="text-[12px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrowseByType;