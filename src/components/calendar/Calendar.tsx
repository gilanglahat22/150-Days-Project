import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isToday } from 'date-fns';

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          {format(currentMonth, dateFormat)}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const dayFormat = "E";
    const days = [];
    const startDate = startOfWeek(startOfMonth(currentMonth));

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="font-medium text-center text-xs md:text-sm py-2 text-gray-600">
          {format(addMonths(startDate, 0), dayFormat)}
        </div>
      );
      startDate.setDate(startDate.getDate() + 1);
    }

    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            key={day.toString()}
            className={`p-1 md:p-2 text-center cursor-pointer text-sm md:text-base ${
              !isSameMonth(day, monthStart)
                ? "text-gray-400"
                : isToday(day)
                ? "bg-primary text-white rounded-full"
                : ""
            } ${
              isSameMonth(day, monthStart) && !isToday(day) ? "hover:bg-gray-100" : ""
            }`}
            onClick={() => onDateClick(cloneDay)}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = new Date(day.getTime() + 24 * 60 * 60 * 1000); // Add 1 day
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7">
          {days}
        </div>
      );
      days = [];
    }

    return <div className="bg-white rounded-lg">{rows}</div>;
  };

  const renderSelectedDate = () => {
    const dateFormat = "d";
    const dayFormat = "EEEE";
    
    return (
      <div className="bg-gray-100 rounded-2xl p-4 md:p-6 flex flex-col items-center mb-4 md:mb-6">
        <h2 className="text-gray-500 text-sm md:text-base font-medium mb-1">
          {format(selectedDate, "MMMM yyyy")}
        </h2>
        <div className="text-4xl md:text-7xl font-bold text-gray-700 mb-1 md:mb-2">
          {format(selectedDate, dateFormat)}
        </div>
        <div className="text-sm md:text-base text-gray-600">
          {format(selectedDate, dayFormat)}
        </div>
      </div>
    );
  };

  const renderClock = () => {
    return (
      <div className="bg-white rounded-lg p-3 md:p-4">
        <div className="text-lg md:text-xl font-semibold mb-1 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Clock
        </div>
        <div className="text-3xl md:text-6xl font-bold text-center py-3 md:py-6 text-gray-700">
          11<span className="text-xl md:text-3xl">:</span>23<span className="text-xl md:text-3xl">:</span>36<span className="text-xs md:text-lg text-gray-400">.89</span>
          <span className="text-2xl md:text-4xl ml-2 md:ml-4">PM</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
        {renderSelectedDate()}
        {renderClock()}
      </div>
      <div className="w-full md:w-1/2 md:pl-4">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    </div>
  );
};

export default Calendar; 