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
      
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Location Sharing</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">View and share your current location</p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden" style={{ height: 'calc(100vh - 240px)', minHeight: '400px', maxHeight: '600px' }}>
        <MapView 
          locations={locations}
          selectedLocation={selectedLocation}
          onSelectLocation={handleSelectLocation}
        />
      </div>
    </Layout>
  );
};

export default MapPage; 