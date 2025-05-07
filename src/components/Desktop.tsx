import React from 'react';
import Window from './Window';
import DesktopIcons from './DesktopIcons';
import { useTheme } from '../context/ThemeContext';

interface DesktopProps {
  openWindows: string[];
  activeWindow: string | null;
  openWindow: (windowId: string) => void;
  closeWindow: (windowId: string) => void;
  setWindowActive: (windowId: string) => void;
}

const Desktop: React.FC<DesktopProps> = ({
  openWindows,
  activeWindow,
  openWindow,
  closeWindow,
  setWindowActive
}) => {
  const { darkMode } = useTheme();
  
  // Background based on theme
  const backgroundImage = darkMode 
    ? 'url(https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1600)'
    : 'url(https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1600)';

  return (
    <div className="desktop" style={{ backgroundImage }}>
      <DesktopIcons openWindow={openWindow} />
      
      {openWindows.map((windowId) => (
        <Window
          key={windowId}
          id={windowId}
          isActive={activeWindow === windowId}
          onClose={() => closeWindow(windowId)}
          onFocus={() => setWindowActive(windowId)}
        />
      ))}
    </div>
  );
};

export default Desktop;