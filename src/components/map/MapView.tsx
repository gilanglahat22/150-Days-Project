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
    <div className="relative w-full h-[600px] bg-gray-200 rounded-xl overflow-hidden">
      {/* This would be replaced with an actual map component */}
      <div className="absolute inset-0 bg-gray-100">
        {/* Fake map image */}
        <img 
          src="/map-placeholder.png" 
          alt="Map" 
          className="w-full h-full object-cover"
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
          <div className={`w-12 h-12 rounded-full bg-teal-400 bg-opacity-30 flex items-center justify-center shadow-lg ${selectedLocation === location.id ? 'ring-4 ring-teal-200' : ''}`}>
            <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          {location.title && selectedLocation === location.id && (
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium">
              {location.title}
            </div>
          )}
        </div>
      ))}
      
      {/* Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MapView; 