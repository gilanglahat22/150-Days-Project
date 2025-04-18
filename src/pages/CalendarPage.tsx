import React from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/common/Header';
import Calendar from '../components/calendar/Calendar';
import TodoList from '../components/calendar/TodoList';

const CalendarPage: React.FC = () => {
  // Todo items (would come from an API or state management in a real app)
  const initialTodos = [
    { id: '1', text: 'Go for a morning run', completed: true },
    { id: '2', text: 'Team meeting at 10:00 AM', completed: false },
    { id: '3', text: 'Submit weekly report', completed: false },
  ];

  return (
    <Layout pageTitle="Calendar">
      <Header username="Delista" />
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Calendar</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Manage your schedule and tasks</p>
      </div>
      
      <div className="flex items-center justify-between mb-5">
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-primary text-white rounded-lg shadow-sm hover:shadow-md transition-all">
            Month
          </button>
          <button className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all">
            Week
          </button>
          <button className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all">
            Day
          </button>
        </div>
        <div className="text-sm px-3 py-1.5 bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-light rounded-full font-medium">
          June 2023
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 md:p-6 shadow-lg text-gray-800 dark:text-white border border-gray-100 dark:border-gray-700 transition-all">
          <Calendar />
        </div>
        <div className="bg-gradient-to-br from-primary/5 to-primary-dark/10 dark:from-gray-800 dark:to-gray-700 rounded-xl p-5 md:p-6 shadow-lg text-gray-800 dark:text-white border border-primary/10 dark:border-gray-600/30 transition-all">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Today's Tasks</h3>
          <TodoList initialTodos={initialTodos} />
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage; 