import React from 'react';
import { Card } from './ui/Card';
import { Users, Shield, Calendar, MapPin, ChevronUp } from 'lucide-react';

const StatsGrid = () => {
  const stats = [
    {
      label: "Info Pasar",
      value: "200",
      icon: <ChevronUp className="w-5 h-5" />
    },
    {
      label: "Tender Diikuti",
      value: "100",
      icon: <ChevronUp className="w-5 h-5" />
    },
    {
      label: "Onhand",
      value: "3",
      icon: <ChevronUp className="w-5 h-5" />
    },
    {
      label: "Kontrak",
      value: "2",
      icon: <ChevronUp className="w-5 h-5" />
    }
  ];

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Baris 1 */}
      <div className="grid grid-cols-2 gap-4">
        {stats.slice(0, 2).map((item, index) => (
          <Card
            key={index}
            className="bg-slate-800 text-white p-5 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium">{item.label}</h3>
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            <p className="text-3xl font-bold mb-2">{item.value}</p>
          </Card>
        ))}
      </div>

      {/* Baris 2 */}
      <div className="grid grid-cols-2 gap-4">
        {stats.slice(2, 4).map((item, index) => (
          <Card
            key={index + 2}
            className="bg-slate-800 text-white p-5 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium">{item.label}</h3>
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            <p className="text-3xl font-bold mb-2">{item.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;