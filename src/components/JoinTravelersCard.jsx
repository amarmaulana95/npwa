import React from 'react';
import { Card } from './ui/Card';
import { ChevronUp } from 'lucide-react';

const StatCard = ({ label, value, icon }) => (
  <Card className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white rounded-2xl p-6 shadow-lg">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm font-medium">{label}</h3>
      <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
        {icon}
      </div>
    </div>
    <p className="text-3xl font-bold mb-2">{value}</p>
  </Card>
);

const StatsGrid = () => {
  const stats = [
    { label: "Info Pasar", value: "200", icon: <ChevronUp className="w-5 h-5" /> },
    { label: "Tender Diikuti", value: "100", icon: <ChevronUp className="w-5 h-5" /> },
    { label: "Onhand", value: "3", icon: <ChevronUp className="w-5 h-5" /> },
    { label: "Kontrak", value: "2", icon: <ChevronUp className="w-5 h-5" /> }
  ];

  return (
    <div className="px-4 py-6 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {stats.slice(0, 2).map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.slice(2).map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;
