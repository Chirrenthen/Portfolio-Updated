import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { icons } from '../data/icons';

interface StartMenuProps {
  openWindow: (windowId: string) => void;
  closeStartMenu: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ openWindow, closeStartMenu }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredApps = icons.filter(app => 
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleAppClick = (windowId: string) => {
    openWindow(windowId);
    closeStartMenu();
  };
  
  return (
    <div className="start-menu">
      <div className="start-menu-header">
        <div className="start-menu-search">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Type here to search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Search size={18} />
            </div>
          </div>
        </div>
        <div className="text-sm opacity-50">Pinned</div>
      </div>
      
      <div className="start-menu-apps">
        {filteredApps.map((app) => (
          <div 
            key={app.id} 
            className="start-menu-app"
            onClick={() => handleAppClick(app.id)}
          >
            <div className="start-menu-app-icon">
              {app.icon}
            </div>
            <div className="start-menu-app-name">{app.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartMenu;