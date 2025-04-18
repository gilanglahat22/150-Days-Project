import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ username = 'Delista' }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4 sm:gap-6">
      <div className="relative w-full sm:flex-1 sm:max-w-md">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full pl-12 pr-4 py-2.5 text-sm sm:text-base rounded-full bg-gray-100 dark:bg-gray-800 border-0 shadow-sm hover:shadow focus:shadow-md focus:ring-2 focus:ring-primary dark:focus:ring-primary-light dark:text-white transition-all duration-200"
          placeholder="Search..."
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        
        <div className="relative">
          <button 
            className="flex items-center space-x-3 rounded-full bg-white dark:bg-gray-800 px-4 py-2 sm:py-2.5 border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-primary/20 dark:hover:border-primary-dark/30 dark:hover:bg-gray-700/70 transition-all duration-200"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex-shrink-0 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white shadow-sm">
              {username.charAt(0)}
            </div>
            <span className="font-medium text-gray-700 dark:text-gray-200 text-sm sm:text-base">{username}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setIsDropdownOpen(false)}></div>
              <div className="absolute right-0 mt-2 w-56 rounded-xl shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black/5 ring-opacity-5 dark:ring-gray-700 p-2 z-40 transform origin-top-right transition-all">
                <a href="/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Your Profile</span>
                </a>
                <a href="/settings" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Settings</span>
                </a>
                <div className="my-1.5 border-t border-gray-100 dark:border-gray-700"></div>
                <a href="/logout" className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Sign out</span>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header; 