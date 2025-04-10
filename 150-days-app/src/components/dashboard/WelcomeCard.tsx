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
    <div className="bg-orange-100 rounded-2xl p-6 mb-6 relative overflow-hidden">
      <div className="flex flex-col max-w-[60%]">
        <h2 className="text-xl font-semibold mb-1">Hello, {username}!</h2>
        <p className="text-sm text-gray-600 mb-4">
          Hello! I know not every day feels exciting, but routine is where progress hides
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="font-medium">{temperature}</span>
            <span className="text-sm text-gray-600">Outdoor temperature</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <span className="text-sm text-gray-600">{weather}</span>
          </div>
        </div>
      </div>
      
      <div className="absolute right-4 bottom-0">
        <img 
          src="/walking-person.svg" 
          alt="Walking Person" 
          className="h-32"
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