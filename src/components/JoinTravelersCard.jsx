import React from 'react';
import { Card } from './ui/Card';
import { Compass } from 'lucide-react';

const JoinTravelersCard = () => {
  return (
    <div className="px-4 py-3">
      <Card className="flex items-center justify-between p-4 bg-gray-50">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">+50</div>
          </div>
          <div>
            <p className="font-medium">Join 2.4M travelers</p>
            <p className="text-sm text-gray-500">Booking their dream stays</p>
          </div>
        </div>
        <Compass className="w-5 h-5 text-gray-400" />
      </Card>
    </div>
  );
};

export default JoinTravelersCard;