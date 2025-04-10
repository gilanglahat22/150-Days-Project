import React, { useState } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden">
      {/* Mobile menu button */}
      <div className="md:hidden p-4 flex items-center">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-primary focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {pageTitle && (
          <h1 className="text-xl font-semibold text-gray-800 ml-4">{pageTitle}</h1>
        )}
      </div>

      {/* Sidebar for mobile (with overlay) */}
      <div className={`md:hidden fixed inset-0 z-40 ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black opacity-50" onClick={() => setSidebarOpen(false)}></div>
        <div className="absolute left-0 top-0 h-full">
          <Sidebar mobile={true} onClose={() => setSidebarOpen(false)} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-auto p-4 md:p-6">
        {pageTitle && (
          <h1 className="hidden md:block text-xl font-semibold text-gray-800 mb-6">{pageTitle}</h1>
        )}
        <div className="bg-white rounded-3xl shadow-sm p-4 md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout; 