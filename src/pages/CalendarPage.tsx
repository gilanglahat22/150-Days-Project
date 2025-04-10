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
      
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Calendar</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your schedule and tasks</p>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
          <Calendar />
        </div>
        <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
          <TodoList initialTodos={initialTodos} />
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage; 