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
      <div className="max-w-6xl mx-auto">
        <Header username="Delista" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="col-span-1 md:col-span-2">
            <Calendar />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <TodoList initialTodos={initialTodos} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage; 