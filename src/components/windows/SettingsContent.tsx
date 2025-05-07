import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Layout, Monitor, Eye, RefreshCw } from 'lucide-react';

const SettingsContent: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <div className="settings-content">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Eye size={20} />
          <span>Appearance</span>
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Choose between light and dark theme
              </p>
            </div>
            
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center gap-2"
            >
              {darkMode ? (
                <>
                  <Moon size={16} />
                  <span>Dark</span>
                </>
              ) : (
                <>
                  <Sun size={16} />
                  <span>Light</span>
                </>
              )}
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">System Preference</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Follow system color scheme
              </p>
            </div>
            
            <div className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                checked={false}
                onChange={() => {}}
                className="opacity-0 w-0 h-0"
                id="system-theme"
              />
              <label
                htmlFor="system-theme"
                className="block absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300"
              >
                <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 transform"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Layout size={20} />
          <span>Layout</span>
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Start Menu Position</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Position of the start menu
              </p>
            </div>
            
            <select className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md">
              <option>Center</option>
              <option>Left</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Taskbar Size</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Size of the taskbar
              </p>
            </div>
            
            <select className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md">
              <option>Medium</option>
              <option>Small</option>
              <option>Large</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Monitor size={20} />
          <span>Display</span>
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Wallpaper</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Choose your desktop background
              </p>
            </div>
            
            <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center gap-2">
              <RefreshCw size={16} />
              <span>Change</span>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Accent Color</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Choose system accent color
              </p>
            </div>
            
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-purple-500 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;