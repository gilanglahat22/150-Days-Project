import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  unit?: string;
  percentage?: number;
  icon?: React.ReactNode;
  color?: 'primary' | 'blue' | 'purple';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  unit,
  percentage,
  icon,
  color = 'primary'
}) => {
  const gradientClass = {
    'primary': 'from-primary to-primary-dark',
    'blue': 'from-blue-500 to-blue-600',
    'purple': 'from-purple-500 to-purple-600',
  }[color];
  
  return (
    <div className={`bg-gradient-to-br ${gradientClass} text-white rounded-2xl p-5 flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider opacity-90">{title}</span>
        <div className="rounded-full bg-white/20 p-1.5 backdrop-blur-sm">
          {icon}
        </div>
      </div>
      
      <div className="mt-3 flex items-end">
        <span className="text-3xl font-bold">{value}</span>
        {unit && <span className="text-sm ml-1.5 mb-1 opacity-90">{unit}</span>}
      </div>
      
      {percentage !== undefined && (
        <div className="mt-auto pt-4">
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <div 
              className="bg-white rounded-full h-2 shadow-sm transition-all duration-1000" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="mt-2 text-xs font-medium">{percentage}% of your goal</div>
        </div>
      )}
    </div>
  );
};

export default StatCard; 