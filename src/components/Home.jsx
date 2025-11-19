import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import JoinTravelersCard from './JoinTravelersCard';
import BrowseByType from './BrowseByType';
import FeaturedThisWeek from './FeaturedThisWeek';
import BottomNavbar from './ui/BottomNavbar';

const Home = () => {
  const navItems = [
    { label: "Home", icon: "🏠", path: "/" },
    { label: "Discover", icon: "🔍", path: "/discover" },
    { label: "Bookings", icon: "📅", path: "/bookings" },
    { label: "Account", icon: "👤", path: "/account" }
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      <Header />
      <SearchBar />
      <JoinTravelersCard />
      {/* <BrowseByType /> */}
      <FeaturedThisWeek />
      <BottomNavbar items={navItems} />
    </div>
  );
};

export default Home;