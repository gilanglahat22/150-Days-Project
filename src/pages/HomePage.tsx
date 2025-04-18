import React from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/common/Header';
import WelcomeCard from '../components/dashboard/WelcomeCard';
import StatCard from '../components/dashboard/StatCard';
import ActivityList from '../components/dashboard/ActivityList';
import ProgressChart from '../components/dashboard/ProgressChart';
import MembersList from '../components/dashboard/MembersList';
import ActivityChart from '../components/dashboard/ActivityChart';

const HomePage: React.FC = () => {
  // Mock data for progress chart
  const activities = [
    { name: 'Cardio', hours: 30, color: '#4BC0C0' },
    { name: 'Stretching', hours: 40, color: '#FF6384' },
    { name: 'Treadmill', hours: 30, color: '#FFCE56' },
    { name: 'Strength', hours: 20, color: '#36A2EB' },
  ];

  // Mock data for activity list
  const userActivities = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Running',
      subtitle: '7.8 miles',
      percentage: 75,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      title: 'Sleeping',
      subtitle: '8hrs/9hrs',
      percentage: 88,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: 'Weight Loss',
      subtitle: '2kg/10kg',
      percentage: 20,
    },
  ];

  // Mock data for members
  const members = [
    { id: '1', name: 'Delista', color: 'bg-primary' },
    { id: '2', name: 'Gilang', color: 'bg-orange-500' },
    { id: '3', name: 'Nicole', color: 'bg-rose-500' },
    { id: '4', name: 'Ezra', color: 'bg-blue-500' },
    { id: '5', name: 'Mam', color: 'bg-orange-500' },
  ];

  // Mock data for activity chart
  const chartData = [65, 59, 80, 81, 56, 55, 40, 55, 66, 75, 89, 80];
  const chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <Layout pageTitle="Dashboard">
      <Header username="Delista" />
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Track your daily activity and progress</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2">
          <WelcomeCard username="Delista" temperature="+25°C" weather="Fuzzy cloudy weather" />
          
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Scarlett's Home</h2>
            <div className="text-xs px-3 py-1.5 bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-light rounded-full font-medium">
              Today's Overview
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-8">
            <StatCard 
              title="Steps" 
              value="2,500" 
              unit="Steps" 
              percentage={50}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              }
            />
            
            <StatCard 
              title="Water" 
              value="1.25" 
              unit="Liters" 
              percentage={65}
              color="blue"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              }
            />
            
            <StatCard 
              title="Calories" 
              value="880" 
              unit="kcal" 
              percentage={45}
              color="purple"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            <div className="md:col-span-1">
              <ActivityList activities={userActivities} />
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-800 dark:to-gray-900 p-5 rounded-2xl shadow-lg">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-semibold text-white text-lg">Progress</h3>
                  <select className="text-xs text-gray-300 border border-gray-700 rounded-lg px-3 py-1.5 bg-gray-700/50 outline-none focus:ring-1 focus:ring-gray-600">
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                
                <ProgressChart activities={activities} totalHours={40} />
                
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center p-2 hover:bg-white/5 rounded-lg transition-colors">
                      <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: activity.color }}></div>
                      <span className="text-sm text-gray-300">{activity.name}</span>
                      <span className="ml-auto text-sm font-medium text-gray-300">{activity.hours} hrs</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-0 pt-5">
            <MembersList members={members} />
            <div className="mt-8">
              <ActivityChart data={chartData} labels={chartLabels} percentage={73} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage; 