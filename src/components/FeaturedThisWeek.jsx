import React from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Star, ChevronRight } from 'lucide-react';

const FeaturedThisWeek = () => {
  const featuredItem = {
    title: "Azure Bay Residence",
    location: "Santorini, Greece",
    rating: 4.9,
    price: "$850/night",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    superHost: true
  };

  return (
    <div className="px-4 py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Tender di Ikuti </h2>
        <button className="text-[13px] text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 transition-colors">
          View all
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <Card className="overflow-hidden rounded-2xl">
        <div className="relative">
          <img src={featuredItem.image} alt={featuredItem.title} className="w-full h-48 object-cover" />
          <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs flex items-center gap-1 shadow">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{featuredItem.rating}</span>
          </div>
          {featuredItem.superHost && (
            <div className="absolute bottom-3 left-3 bg-black text-white text-xs px-2 py-1 rounded-full">
              Super Host
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold">{featuredItem.title}</h3>
          <p className="text-gray-500 text-sm">{featuredItem.location}</p>
        </div>
        <div className="p-4 pt-0 flex justify-between items-center">
          <span className="font-bold">{featuredItem.price}</span>
          <Button size="sm">Book Now</Button>
        </div>
      </Card>
    </div>
  );
};

export default FeaturedThisWeek;