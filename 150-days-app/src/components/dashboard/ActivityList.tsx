import React from 'react';

interface Activity {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  percentage: number;
}

interface ActivityListProps {
  activities: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <div className="mr-4 p-2 bg-gray-100 rounded-xl">
            {activity.icon}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-medium">{activity.title}</h3>
              <span className="text-primary font-semibold">{activity.percentage}%</span>
            </div>
            <div className="text-sm text-gray-500 mb-2">{activity.subtitle}</div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-primary rounded-full h-1.5"
                style={{ width: `${activity.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityList; 