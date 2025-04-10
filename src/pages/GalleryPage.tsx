import React from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/common/Header';
import Gallery from '../components/gallery/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <Layout pageTitle="galeri">
      <div className="max-w-7xl mx-auto">
        <Header username="Delista" />
        <div className="mt-6">
          <Gallery />
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage; 