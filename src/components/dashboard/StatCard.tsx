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
  const bgColorClass = {
    'primary': 'bg-primary',
    'blue': 'bg-blue-500',
    'purple': 'bg-purple-500',
  }[color];
  
  return (
    <div className={`${bgColorClass} text-white rounded-2xl p-4 flex flex-col h-full`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium uppercase tracking-wide opacity-80">{title}</span>
        {icon}
      </div>
      
      <div className="mt-2 flex items-end">
        <span className="text-3xl font-bold">{value}</span>
        {unit && <span className="text-sm ml-1 mb-1 opacity-80">{unit}</span>}
      </div>
      
      {percentage !== undefined && (
        <div className="mt-auto pt-3">
          <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="mt-1 text-xs">{percentage}% of your goal</div>
        </div>
      )}
    </div>
  );
};

export default StatCard; 