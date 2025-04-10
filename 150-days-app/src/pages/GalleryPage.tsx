import React from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/common/Header';
import Gallery from '../components/gallery/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <Layout pageTitle="galeri">
      <Header username="Delista" />
      <Gallery />
    </Layout>
  );
};

export default GalleryPage; 