import React, { useState } from 'react';

interface HeaderProps {
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ username = 'Delista' }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
      <div className="relative w-full sm:flex-1 sm:max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 rounded-full bg-gray-100 border-0 focus:ring-2 focus:ring-primary"
          placeholder="Search"
        />
      </div>
      
      <div className="relative">
        <button 
          className="flex items-center space-x-2 rounded-full bg-white px-3 py-2 border border-gray-200"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
            {username.charAt(0)}
          </div>
          <span className="font-medium text-gray-700">{username}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 z-10">
            <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Your Profile
            </a>
            <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Settings
            </a>
            <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Sign out
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header; 