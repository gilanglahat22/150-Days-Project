import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/common/Header';
import ProfileForm from '../components/profile/ProfileForm';
import SecuritySettings from '../components/profile/SecuritySettings';
import NotificationSettings from '../components/profile/NotificationSettings';
import BillingInfo from '../components/profile/BillingInfo';

type TabType = 'profile' | 'security' | 'notifications' | 'billing';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  
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
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Profile Settings</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Manage your account information and preferences</p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="flex items-center space-x-6 p-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            D
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Delista's Profile</h2>
            <p className="text-gray-500 dark:text-gray-300">Member since January 2023</p>
            <div className="mt-3 flex space-x-2">
              <button className="text-primary dark:text-primary-light text-sm hover:underline font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Change profile picture
              </button>
              <button className="text-gray-500 dark:text-gray-300 text-sm hover:underline font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Remove picture
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-100 dark:border-gray-700 overflow-x-auto bg-white dark:bg-gray-900">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 font-medium text-sm transition-colors ${
              activeTab === 'profile' 
                ? 'text-primary dark:text-primary-light border-b-2 border-primary dark:border-primary-light' 
                : 'text-gray-500 dark:text-gray-100 hover:text-gray-700 dark:hover:text-white'
            }`}
          >
            Personal Info
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`px-6 py-3 font-medium text-sm transition-colors ${
              activeTab === 'security' 
                ? 'text-primary dark:text-primary-light border-b-2 border-primary dark:border-primary-light' 
                : 'text-gray-500 dark:text-gray-100 hover:text-gray-700 dark:hover:text-white'
            }`}
          >
            Password & Security
          </button>
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`px-6 py-3 font-medium text-sm transition-colors ${
              activeTab === 'notifications' 
                ? 'text-primary dark:text-primary-light border-b-2 border-primary dark:border-primary-light' 
                : 'text-gray-500 dark:text-gray-100 hover:text-gray-700 dark:hover:text-white'
            }`}
          >
            Notifications
          </button>
          <button 
            onClick={() => setActiveTab('billing')}
            className={`px-6 py-3 font-medium text-sm transition-colors ${
              activeTab === 'billing' 
                ? 'text-primary dark:text-primary-light border-b-2 border-primary dark:border-primary-light' 
                : 'text-gray-500 dark:text-gray-100 hover:text-gray-700 dark:hover:text-white'
            }`}
          >
            Billing & Subscription
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'profile' && <ProfileForm initialData={profileData} onSave={handleSaveProfile} />}
          {activeTab === 'security' && <SecuritySettings />}
          {activeTab === 'notifications' && <NotificationSettings />}
          {activeTab === 'billing' && <BillingInfo />}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage; 