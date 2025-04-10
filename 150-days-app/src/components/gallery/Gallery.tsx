import React, { useState } from 'react';

interface GalleryItem {
  id: string;
  src: string;
  title?: string;
  date?: string;
}

interface GalleryProps {
  items?: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ items = [] }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // For demonstration, if no items are provided, show a placeholder
  const galleryItems = items.length > 0 ? items : Array(12).fill(null).map((_, index) => ({
    id: `placeholder-${index}`,
    src: `https://via.placeholder.com/300x200?text=Image+${index + 1}`,
    title: `Image ${index + 1}`,
    date: '2023-07-15'
  }));

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            <img 
              src={item.src} 
              alt={item.title || 'Gallery image'} 
              className="w-full h-48 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23EEEEEE%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-size%3D%2220%22%20text-anchor%3D%22middle%22%20alignment-baseline%3D%22middle%22%20font-family%3D%22monospace%2C%20sans-serif%22%20fill%3D%22%23AAAAAA%22%3EImage%3C%2Ftext%3E%3C%2Fsvg%3E';
              }}
            />
            {item.title && (
              <div className="p-3">
                <h3 className="font-medium">{item.title}</h3>
                {item.date && <p className="text-sm text-gray-500">{item.date}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeLightbox}>
          <div className="max-w-4xl max-h-screen p-4" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedItem.src} 
              alt={selectedItem.title || 'Gallery image'} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            {selectedItem.title && (
              <div className="mt-2 text-white">
                <h3 className="text-lg font-medium">{selectedItem.title}</h3>
                {selectedItem.date && <p className="text-sm opacity-80">{selectedItem.date}</p>}
              </div>
            )}
          </div>
          <button 
            className="absolute top-4 right-4 text-white p-2"
            onClick={closeLightbox}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery; 