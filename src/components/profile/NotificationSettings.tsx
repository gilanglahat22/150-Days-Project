import React, { useState } from 'react';

interface NotificationOption {
  id: string;
  title: string;
  description: string;
  email: boolean;
  push: boolean;
  sms: boolean;
}

const NotificationSettings: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationOption[]>([
    {
      id: 'account',
      title: 'Account Updates',
      description: 'Important information about your account, settings, and password changes',
      email: true,
      push: true,
      sms: false
    },
    {
      id: 'activity',
      title: 'Activity Reminders',
      description: 'Notifications for your daily tasks, goals, and activity progress',
      email: true,
      push: true,
      sms: true
    },
    {
      id: 'progress',
      title: 'Progress Reports',
      description: 'Weekly and monthly summaries of your progress and achievements',
      email: true,
      push: false,
      sms: false
    },
    {
      id: 'team',
      title: 'Team Updates',
      description: 'Updates from team members, comments and collaboration alerts',
      email: false,
      push: true,
      sms: false
    },
    {
      id: 'marketing',
      title: 'Marketing & Promotions',
      description: 'Special offers, product updates, and promotional content',
      email: false,
      push: false,
      sms: false
    }
  ]);
  
  const [emailDigest, setEmailDigest] = useState('weekly');
  const [quietHours, setQuietHours] = useState({enabled: true, from: '22:00', to: '07:00'});
  
  const toggleNotification = (id: string, channel: 'email' | 'push' | 'sms') => {
    setNotifications(notifications.map(notification => {
      if (notification.id === id) {
        return {
          ...notification,
          [channel]: !notification[channel]
        };
      }
      return notification;
    }));
  };
  
  const toggleAllNotifications = (channel: 'email' | 'push' | 'sms', value: boolean) => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      [channel]: value
    })));
  };
  
  const isAllEnabled = (channel: 'email' | 'push' | 'sms') => {
    return notifications.every(notification => notification[channel]);
  };
  
  const isAllDisabled = (channel: 'email' | 'push' | 'sms') => {
    return notifications.every(notification => !notification[channel]);
  };
  
  const toggleQuietHours = () => {
    setQuietHours({...quietHours, enabled: !quietHours.enabled});
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Notification Preferences</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Choose how you want to be notified about activity, updates, and more.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">Type</th>
                <th scope="col" className="px-4 py-3 font-medium">
                  <div className="flex items-center justify-between">
                    <span>Email</span>
                    <button 
                      onClick={() => toggleAllNotifications('email', !isAllEnabled('email'))}
                      className={`text-xs px-2 py-1 rounded ${
                        isAllEnabled('email') 
                          ? 'bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-light' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {isAllEnabled('email') ? 'Disable All' : 'Enable All'}
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  <div className="flex items-center justify-between">
                    <span>Push</span>
                    <button 
                      onClick={() => toggleAllNotifications('push', !isAllEnabled('push'))}
                      className={`text-xs px-2 py-1 rounded ${
                        isAllEnabled('push') 
                          ? 'bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-light' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {isAllEnabled('push') ? 'Disable All' : 'Enable All'}
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  <div className="flex items-center justify-between">
                    <span>SMS</span>
                    <button 
                      onClick={() => toggleAllNotifications('sms', !isAllEnabled('sms'))}
                      className={`text-xs px-2 py-1 rounded ${
                        isAllEnabled('sms') 
                          ? 'bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-light' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {isAllEnabled('sms') ? 'Disable All' : 'Enable All'}
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification, index) => (
                <tr key={notification.id} className={`border-b dark:border-gray-700 ${index % 2 === 0 ? 'bg-white dark:bg-gray-800/50' : 'bg-gray-50 dark:bg-gray-800'}`}>
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{notification.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.description}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={notification.email} 
                        onChange={() => toggleNotification(notification.id, 'email')} 
                        className="sr-only peer" 
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary-dark/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary dark:peer-checked:bg-primary-dark"></div>
                    </label>
                  </td>
                  <td className="px-4 py-3">
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={notification.push} 
                        onChange={() => toggleNotification(notification.id, 'push')} 
                        className="sr-only peer" 
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary-dark/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary dark:peer-checked:bg-primary-dark"></div>
                    </label>
                  </td>
                  <td className="px-4 py-3">
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={notification.sms} 
                        onChange={() => toggleNotification(notification.id, 'sms')} 
                        className="sr-only peer" 
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary-dark/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary dark:peer-checked:bg-primary-dark"></div>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Email Digest Settings</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Choose how often you want to receive email summaries of your activity and updates.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => setEmailDigest('daily')}
            className={`px-4 py-2 rounded-lg ${
              emailDigest === 'daily' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Daily
          </button>
          <button 
            onClick={() => setEmailDigest('weekly')}
            className={`px-4 py-2 rounded-lg ${
              emailDigest === 'weekly' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Weekly
          </button>
          <button 
            onClick={() => setEmailDigest('monthly')}
            className={`px-4 py-2 rounded-lg ${
              emailDigest === 'monthly' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setEmailDigest('never')}
            className={`px-4 py-2 rounded-lg ${
              emailDigest === 'never' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Never
          </button>
        </div>
      </div>
      
      <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">Quiet Hours</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Don't send notifications during these hours
            </p>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={quietHours.enabled} 
              onChange={toggleQuietHours}
              className="sr-only peer" 
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary-dark/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary dark:peer-checked:bg-primary-dark"></div>
          </label>
        </div>
        
        {quietHours.enabled && (
          <div className="mt-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">From</label>
                <input
                  type="time"
                  value={quietHours.from}
                  onChange={(e) => setQuietHours({...quietHours, from: e.target.value})}
                  className="w-full p-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">To</label>
                <input
                  type="time"
                  value={quietHours.to}
                  onChange={(e) => setQuietHours({...quietHours, to: e.target.value})}
                  className="w-full p-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
              All notifications will be muted between {quietHours.from} and {quietHours.to}
            </p>
          </div>
        )}
      </div>
      
      <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-end">
        <button
          type="button"
          className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings; 