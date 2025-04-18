import React from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/common/Header';
import Gallery from '../components/gallery/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <Layout pageTitle="Gallery">
      <Header username="Delista" />
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Photo Gallery</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">View and manage your collection of photos</p>
      </div>
      
      <div className="bg-white/50 dark:bg-gray-800/50 p-1 rounded-xl backdrop-blur-sm mb-6">
        <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-primary text-white rounded-lg shadow-sm hover:shadow-md transition-all">
              All Photos
            </button>
            <button className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all">
              Recent
            </button>
            <button className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all">
              Favorites
            </button>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search photos..." 
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
            />
            <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <Gallery />
    </Layout>
  );
};

export default GalleryPage; 