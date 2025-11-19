import { Home, Search, Bell, User } from "lucide-react";

export default function BottomNavbar() {
  const navItems = [
    { name: "Home", icon: <Home size={24} />, color: "text-emerald-600" },
    { name: "Search", icon: <Search size={24} />, color: "text-emerald-600" },
    { name: "Notifications", icon: <Bell size={24} />, color: "text-emerald-600" },
    { name: "Profile", icon: <User size={24} />, color: "text-emerald-600" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md md:hidden">
      <ul className="flex justify-around">
        {navItems.map((item) => (
          <li key={item.name} className="py-2 flex flex-col items-center text-xs">
            <span className={`${item.color}`}>{item.icon}</span>
            <span className="mt-1">{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
