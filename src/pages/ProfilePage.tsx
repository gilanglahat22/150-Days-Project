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
    <Layout pageTitle="profil setting">
      <div className="max-w-4xl mx-auto">
        <Header username="Delista" />
        <div className="mt-6">
          <ProfileForm initialData={profileData} onSave={handleSaveProfile} />
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage; 