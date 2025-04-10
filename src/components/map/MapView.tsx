import React from 'react';

interface Location {
  id: string;
  lat: number;
  lng: number;
  title?: string;
}

interface MapViewProps {
  locations: Location[];
  selectedLocation?: string;
  onSelectLocation?: (id: string) => void;
}

const MapView: React.FC<MapViewProps> = ({
  locations,
  selectedLocation,
  onSelectLocation
}) => {
  // This is a simplified map view without actual map integration
  // In a real app, you would integrate with Google Maps, Mapbox, or other map providers
  
  return (
    <div className="relative w-full h-full bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
      {/* This would be replaced with an actual map component */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800">
        {/* Fake map image */}
        <img 
          src="/map-placeholder.png" 
          alt="Map" 
          className="w-full h-full object-cover opacity-100 dark:opacity-70"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23EEEEEE%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-size%3D%2220%22%20text-anchor%3D%22middle%22%20alignment-baseline%3D%22middle%22%20font-family%3D%22monospace%2C%20sans-serif%22%20fill%3D%22%23AAAAAA%22%3EMap%20View%3C%2Ftext%3E%3C%2Fsvg%3E';
          }}
        />
      </div>
      
      {/* Location pins */}
      {locations.map((location) => (
        <div 
          key={location.id}
          className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2`}
          style={{ 
            top: `${(100 - (location.lat * 100))}%`, 
            left: `${location.lng * 100}%`,
            zIndex: selectedLocation === location.id ? 20 : 10
          }}
          onClick={() => onSelectLocation && onSelectLocation(location.id)}
        >
          <div className={`w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-500 bg-opacity-30 dark:bg-opacity-40 flex items-center justify-center shadow-lg ${selectedLocation === location.id ? 'ring-4 ring-teal-200 dark:ring-teal-400/40' : ''}`}>
            <div className="w-6 h-6 rounded-full bg-teal-500 dark:bg-teal-400 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          {location.title && selectedLocation === location.id && (
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg shadow-md text-sm font-medium text-gray-800 dark:text-white">
              {location.title}
            </div>
          )}
        </div>
      ))}
      
      {/* Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
      </div>
      
      {/* Map View label */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md">
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Map View
        </div>
      </div>
    </div>
  );
};

export default MapView; 