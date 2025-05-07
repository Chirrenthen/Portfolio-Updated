import React, { useState, useEffect } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  const openWindow = (windowId: string) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId]);
    }
    setActiveWindow(windowId);
    setIsStartMenuOpen(false);
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter(id => id !== windowId));
    if (activeWindow === windowId) {
      setActiveWindow(openWindows.length > 1 ? openWindows[0] : null);
    }
  };

  const setWindowActive = (windowId: string) => {
    setActiveWindow(windowId);
  };

  // Close start menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isStartMenuOpen && !target.closest('.start-menu') && !target.closest('.start-button')) {
        setIsStartMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isStartMenuOpen]);

  return (
    <ThemeProvider>
      <div className="app">
        <Desktop 
          openWindows={openWindows}
          activeWindow={activeWindow}
          openWindow={openWindow}
          closeWindow={closeWindow}
          setWindowActive={setWindowActive}
        />
        
        {isStartMenuOpen && (
          <StartMenu 
            openWindow={openWindow}
            closeStartMenu={() => setIsStartMenuOpen(false)}
          />
        )}
        
        <Taskbar 
          toggleStartMenu={toggleStartMenu}
          isStartMenuOpen={isStartMenuOpen}
          openWindows={openWindows}
          activeWindow={activeWindow}
          setWindowActive={setWindowActive}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;