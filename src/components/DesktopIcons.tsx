import React from 'react';
import { icons } from '../data/icons';

interface DesktopIconsProps {
  openWindow: (windowId: string) => void;
}

const DesktopIcons: React.FC<DesktopIconsProps> = ({ openWindow }) => {
  const desktopIcons = icons.filter(icon => icon.showOnDesktop);
  
  return (
    <div className="desktop-icons">
      {desktopIcons.map((icon) => (
        <div
          key={icon.id}
          className="desktop-icon group"
          onClick={() => icon.externalLink ? window.open(icon.externalLink, '_blank') : openWindow(icon.id)}
          onDoubleClick={() => icon.externalLink ? window.open(icon.externalLink, '_blank') : openWindow(icon.id)}
        >
          <div className={`desktop-icon-img bg-gradient-to-br ${icon.gradient} p-2 rounded-xl shadow-lg 
            backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
            {icon.icon}
          </div>
          <div className="desktop-icon-name bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm
            transition-all duration-300 group-hover:bg-black/70">
            {icon.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;