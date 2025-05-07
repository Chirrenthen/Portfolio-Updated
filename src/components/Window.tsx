import React, { useState, useRef, useEffect } from 'react';
import { X, Minus, Square } from 'lucide-react';
import AboutContent from './windows/AboutContent';
import SkillsContent from './windows/SkillsContent';
import ProjectsContent from './windows/ProjectsContent';
import ContactContent from './windows/ContactContent';
import SettingsContent from './windows/SettingsContent';

interface WindowProps {
  id: string;
  isActive: boolean;
  onClose: () => void;
  onFocus: () => void;
}

const Window: React.FC<WindowProps> = ({ id, isActive, onClose, onFocus }) => {
  const [position, setPosition] = useState({ x: 50 + Math.random() * 100, y: 50 + Math.random() * 50 });
  const [size, setSize] = useState({ width: 700, height: 500 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [preMaximizeState, setPreMaximizeState] = useState({ position: { x: 0, y: 0 }, size: { width: 0, height: 0 } });
  
  const windowRef = useRef<HTMLDivElement>(null);
  
  // Get window title based on ID
  const getWindowTitle = () => {
    switch (id) {
      case 'about': return 'About Me';
      case 'skills': return 'My Skills';
      case 'projects': return 'My Projects';
      case 'contact': return 'Contact Me';
      case 'settings': return 'Settings';
      default: return 'Window';
    }
  };
  
  // Get window content based on ID
  const getWindowContent = () => {
    switch (id) {
      case 'about': return <AboutContent />;
      case 'skills': return <SkillsContent />;
      case 'projects': return <ProjectsContent />;
      case 'contact': return <ContactContent />;
      case 'settings': return <SettingsContent />;
      default: return <div>Window content</div>;
    }
  };
  
  // Start dragging
  const startDrag = (e: React.MouseEvent) => {
    if (isMaximized) return;
    
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    onFocus();
    
    // Prevent text selection during drag
    e.preventDefault();
  };
  
  // Handle dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);
  
  // Maximize/restore window
  const toggleMaximize = () => {
    if (isMaximized) {
      // Restore previous position and size
      setPosition(preMaximizeState.position);
      setSize(preMaximizeState.size);
    } else {
      // Save current position and size
      setPreMaximizeState({
        position: { ...position },
        size: { ...size }
      });
      
      // Maximize
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight - 48 }); // 48px is taskbar height
    }
    
    setIsMaximized(!isMaximized);
  };
  
  // Window style
  const windowStyle = {
    width: `${size.width}px`,
    height: `${size.height}px`,
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: isDragging ? 'none' : 'transform 0.1s ease'
  };
  
  return (
    <div 
      ref={windowRef}
      className={`window glass-effect rounded-win11 ${isActive ? 'active' : ''}`}
      style={windowStyle}
      onClick={onFocus}
    >
      <div className="window-titlebar" onMouseDown={startDrag}>
        <div className="window-title">{getWindowTitle()}</div>
        <div className="window-controls">
          <div className="window-control" onClick={() => {}}>
            <Minus size={16} />
          </div>
          <div className="window-control" onClick={toggleMaximize}>
            <Square size={16} />
          </div>
          <div className="window-control close" onClick={onClose}>
            <X size={16} />
          </div>
        </div>
      </div>
      <div className="window-content">
        {getWindowContent()}
      </div>
    </div>
  );
};

export default Window;