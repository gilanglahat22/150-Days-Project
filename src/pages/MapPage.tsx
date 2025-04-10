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
    <Layout pageTitle="sharelok">
      <div className="flex flex-col h-full">
        <Header username="Delista" />
        <div className="flex-1 w-full mt-4">
          <MapView 
            locations={locations}
            selectedLocation={selectedLocation}
            onSelectLocation={handleSelectLocation}
          />
        </div>
      </div>
    </Layout>
  );
};

export default MapPage; 