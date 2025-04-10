import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface ActivityChartProps {
  data: number[];
  labels: string[];
  percentage?: number;
  title?: string;
}

const ActivityChart: React.FC<ActivityChartProps> = ({
  data,
  labels,
  percentage = 73,
  title = 'Activity'
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        fill: true,
        label: title,
        data: data,
        borderColor: 'rgb(248, 113, 113)',
        backgroundColor: 'rgba(248, 113, 113, 0.2)',
        tension: 0.4,
        pointRadius: 0,
        pointHitRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
          },
          color: '#9CA3AF',
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-semibold text-gray-700">{title}</h3>
          <div className="text-orange-500 font-semibold">{percentage}% Spending</div>
        </div>
        <select className="text-xs text-gray-500 border border-gray-200 rounded-md px-2 py-1">
          <option>Month</option>
          <option>Week</option>
          <option>Year</option>
        </select>
      </div>
      
      <div className="h-40">
        <Line data={chartData} options={options as any} />
      </div>
    </div>
  );
};

export default ActivityChart; 