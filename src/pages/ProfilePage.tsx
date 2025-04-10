import React from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/common/Header';
import ProfileForm from '../components/profile/ProfileForm';

const ProfilePage: React.FC = () => {
  // Initial profile data (would come from an API or state management in a real app)
  const profileData = {
    fullName: 'Delista',
    nickName: 'Del',
    email: 'delei@gmail.com',
  };

  const handleSaveProfile = (data: any) => {
    console.log('Saving profile data:', data);
    // In a real app, this would call an API
  };

  return (
    <Layout pageTitle="Profile Settings">
      <Header username="Delista" />
      
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Profile Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your account information and preferences</p>
      </div>
      
      <ProfileForm initialData={profileData} onSave={handleSaveProfile} />
    </Layout>
  );
};

export default ProfilePage; 