import React from 'react';

interface WelcomeCardProps {
  username: string;
  temperature?: string;
  weather?: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({
  username,
  temperature = '+25°C',
  weather = 'Fuzzy cloudy weather'
}) => {
  return (
    <div className="bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-3xl p-8 mb-8 relative overflow-hidden shadow-lg border border-orange-200/50 dark:border-orange-700/30 transition-all duration-300">
      <div className="flex flex-col max-w-[60%]">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Hello, {username}!</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          Hello! I know not every day feels exciting, but routine is where progress hides
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/50 shadow-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-white">{temperature}</span>
              <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">Outdoor temperature</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/50 shadow-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">{weather}</span>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 bottom-0 opacity-90 dark:opacity-70 transform translate-y-2">
        <img 
          src="/walking-person.svg" 
          alt="Walking Person" 
          className="h-40 transition-transform hover:translate-x-2 duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.style.display = 'none';
          }} 
        />
      </div>
    </div>
  );
};

export default WelcomeCard; 