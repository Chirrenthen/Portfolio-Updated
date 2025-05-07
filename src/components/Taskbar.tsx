import React, { useState, useEffect } from 'react';
import { 
  Disc, 
  Wifi, 
  Volume2, 
  Battery, 
  ChevronUp, 
  Moon, 
  Sun,
  BellRing,
  Calendar
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { icons } from '../data/icons';

interface TaskbarProps {
  toggleStartMenu: () => void;
  isStartMenuOpen: boolean;
  openWindows: string[];
  activeWindow: string | null;
  setWindowActive: (windowId: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({
  toggleStartMenu,
  isStartMenuOpen,
  openWindows,
  activeWindow,
  setWindowActive
}) => {
  const { darkMode, toggleTheme } = useTheme();
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [isCharging, setIsCharging] = useState(false);
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Get battery status
  useEffect(() => {
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        setBatteryLevel(battery.level * 100);
        setIsCharging(battery.charging);
        
        battery.addEventListener('levelchange', () => {
          setBatteryLevel(battery.level * 100);
        });
        
        battery.addEventListener('chargingchange', () => {
          setIsCharging(battery.charging);
        });
      });
    }
  }, []);
  
  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDate = time.toLocaleDateString([], { 
    weekday: 'short',
    month: 'short', 
    day: 'numeric' 
  });
  
  return (
    <div className="taskbar">
      <div className="taskbar-inner">
        <div 
          className={`start-button ${isStartMenuOpen ? 'active' : ''}`}
          onClick={toggleStartMenu}
        >
          <Disc size={24} className="text-blue-500" />
        </div>
        
        <div className="taskbar-icons">
          {icons.filter(icon => icon.showInTaskbar).map(icon => {
            const isOpen = openWindows.includes(icon.id);
            const isActive = activeWindow === icon.id;
            
            return (
              <div 
                key={icon.id}
                className={`taskbar-icon ${isOpen ? 'open' : ''} ${isActive ? 'active' : ''}`}
                onClick={() => {
                  if (isOpen) {
                    setWindowActive(icon.id);
                  }
                }}
              >
                {icon.icon}
              </div>
            );
          })}
        </div>
        
        <div className="system-tray">
          <div className="system-tray-icon" onClick={toggleTheme}>
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          </div>
          <div className="system-tray-icon">
            <BellRing size={18} />
          </div>
          <div className="system-tray-icon">
            <Wifi size={18} />
          </div>
          <div className="system-tray-icon">
            <Volume2 size={18} />
          </div>
          <div className="system-tray-icon">
            <Battery size={18} />
            {batteryLevel !== null && (
              <span className="text-xs ml-1">{Math.round(batteryLevel)}%</span>
            )}
          </div>
          <div className="system-tray-icon">
            <Calendar size={18} />
          </div>
          <div className="px-3 flex flex-col items-end">
            <div className="text-sm font-medium">{formattedTime}</div>
            <div className="text-xs opacity-75">{formattedDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;