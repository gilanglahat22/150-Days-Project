import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/common/Header';
import MapView from '../components/map/MapView';

const MapPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(undefined);
  
  // Example locations (would come from an API in a real app)
  const locations = [
    { id: '1', lat: 0.3, lng: 0.2, title: 'Home' },
    { id: '2', lat: 0.5, lng: 0.45, title: 'Work' },
    { id: '3', lat: 0.7, lng: 0.8, title: 'Gym' },
    { id: '4', lat: 0.6, lng: 0.5, title: 'Coffee Shop' },
  ];

  const handleSelectLocation = (id: string) => {
    setSelectedLocation(id);
  };

  return (
    <Layout pageTitle="Share Location">
      <Header username="Delista" />
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Location Sharing</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">View and share your current location</p>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center shadow-sm">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-800 dark:text-white font-medium">Live Tracking Active</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Your location is being shared</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg shadow-sm hover:shadow-md transition-all">
          Share Location
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700" style={{ height: 'calc(100vh - 300px)', minHeight: '400px' }}>
            <MapView 
              locations={locations}
              selectedLocation={selectedLocation}
              onSelectLocation={handleSelectLocation}
            />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-gray-800 dark:text-white mb-4">Saved Locations</h3>
            <div className="space-y-3">
              {locations.map(location => (
                <button 
                  key={location.id}
                  onClick={() => handleSelectLocation(location.id)}
                  className={`w-full text-left p-3 rounded-lg flex items-center space-x-3 transition-all ${
                    selectedLocation === location.id 
                      ? 'bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-light'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{location.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MapPage; 