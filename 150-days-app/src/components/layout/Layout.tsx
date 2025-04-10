import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        {pageTitle && (
          <h1 className="text-xl font-semibold text-gray-800 mb-6">{pageTitle}</h1>
        )}
        <div className="bg-white rounded-3xl shadow-sm p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout; 