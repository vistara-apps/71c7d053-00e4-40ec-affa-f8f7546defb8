'use client';

import { useState } from 'react';
import { Home, Palette, Store, Trophy, User } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

export function Navigation() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: <Home className="w-5 h-5" />,
      active: activeTab === 'home'
    },
    {
      id: 'create',
      label: 'Create',
      icon: <Palette className="w-5 h-5" />,
      active: activeTab === 'create'
    },
    {
      id: 'marketplace',
      label: 'Market',
      icon: <Store className="w-5 h-5" />,
      active: activeTab === 'marketplace'
    },
    {
      id: 'challenges',
      label: 'Challenges',
      icon: <Trophy className="w-5 h-5" />,
      active: activeTab === 'challenges'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <User className="w-5 h-5" />,
      active: activeTab === 'profile'
    }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    // TODO: Implement navigation logic
    console.log('Navigate to:', tabId);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/20">
      <div className="max-w-xl mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`
                flex flex-col items-center space-y-1 py-2 px-3 rounded-lg
                transition-all duration-200 min-w-[60px]
                ${item.active 
                  ? 'text-accent bg-white/10' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
                }
              `}
            >
              {item.icon}
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
