import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ActivityItem {
  name: string;
  hours: number;
  color: string;
}

interface ProgressChartProps {
  activities: ActivityItem[];
  totalHours: number;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ activities, totalHours }) => {
  const data = {
    labels: activities.map(activity => activity.name),
    datasets: [
      {
        data: activities.map(activity => activity.hours),
        backgroundColor: activities.map(activity => activity.color),
        borderColor: activities.map(activity => activity.color),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw} hrs`;
          }
        }
      }
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="relative h-44">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className="text-2xl font-bold">{totalHours}hrs</span>
      </div>
    </div>
  );
};

export default ProgressChart; 