import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  mobile?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ mobile = false, onClose }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className={`h-screen flex-shrink-0 ${mobile ? 'w-72' : 'w-16 md:w-24'} bg-gradient-to-b from-primary to-primary-dark dark:from-gray-800 dark:to-gray-900 ${mobile ? '' : 'rounded-r-3xl'} flex flex-col items-center py-8 shadow-xl transition-all duration-300`}>
      {mobile && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white focus:outline-none hover:text-gray-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      
      <div className="mb-12">
        <Link to="/" className="text-white font-bold text-3xl">
          <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-md transition-all hover:scale-105 duration-200">
            <span className="text-primary text-3xl font-extrabold dark:text-primary-light">F</span>
          </div>
        </Link>
      </div>
      
      <nav className="flex flex-col items-center space-y-8 flex-1">
        <Link 
          to="/" 
          className={`p-3 rounded-xl ${isActive('/') ? 'bg-white dark:bg-gray-700 text-primary dark:text-primary-light shadow-md' : 'text-white hover:bg-white/10 dark:hover:bg-gray-700/30'} flex items-center transition-all duration-200`}
          onClick={mobile ? onClose : undefined}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          {mobile && <span className="ml-3 font-medium">Home</span>}
        </Link>
        
        <Link 
          to="/calendar" 
          className={`p-3 rounded-xl ${isActive('/calendar') ? 'bg-white dark:bg-gray-700 text-primary dark:text-primary-light shadow-md' : 'text-white hover:bg-white/10 dark:hover:bg-gray-700/30'} flex items-center transition-all duration-200`}
          onClick={mobile ? onClose : undefined}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {mobile && <span className="ml-3 font-medium">Calendar</span>}
        </Link>
        
        <Link 
          to="/gallery" 
          className={`p-3 rounded-xl ${isActive('/gallery') ? 'bg-white dark:bg-gray-700 text-primary dark:text-primary-light shadow-md' : 'text-white hover:bg-white/10 dark:hover:bg-gray-700/30'} flex items-center transition-all duration-200`}
          onClick={mobile ? onClose : undefined}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {mobile && <span className="ml-3 font-medium">Gallery</span>}
        </Link>
        
        <Link 
          to="/map" 
          className={`p-3 rounded-xl ${isActive('/map') ? 'bg-white dark:bg-gray-700 text-primary dark:text-primary-light shadow-md' : 'text-white hover:bg-white/10 dark:hover:bg-gray-700/30'} flex items-center transition-all duration-200`}
          onClick={mobile ? onClose : undefined}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {mobile && <span className="ml-3 font-medium">Map</span>}
        </Link>
        
        <Link 
          to="/profile" 
          className={`p-3 rounded-xl ${isActive('/profile') ? 'bg-white dark:bg-gray-700 text-primary dark:text-primary-light shadow-md' : 'text-white hover:bg-white/10 dark:hover:bg-gray-700/30'} flex items-center transition-all duration-200`}
          onClick={mobile ? onClose : undefined}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {mobile && <span className="ml-3 font-medium">Profile</span>}
        </Link>
      </nav>
      
      <div className="mt-auto">
        <Link 
          to="/logout" 
          className="p-3 rounded-xl text-white flex items-center hover:bg-red-500/20 transition-all duration-200"
          onClick={mobile ? onClose : undefined}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          {mobile && <span className="ml-3 font-medium">Logout</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar; 