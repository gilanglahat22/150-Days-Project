import React from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/common/Header';
import Gallery from '../components/gallery/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <Layout pageTitle="Gallery">
      <Header username="Delista" />
      
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Photo Gallery</h1>
        <p className="text-gray-500 text-sm mt-1">View and manage your collection of photos</p>
      </div>
      
      <Gallery />
    </Layout>
  );
};

export default GalleryPage; 