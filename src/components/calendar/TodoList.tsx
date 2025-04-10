import React, { useState } from 'react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  initialTodos?: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ initialTodos = [] }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    
    const newTodoItem: Todo = {
      id: Math.random().toString(36).substr(2, 9),
      text: newTodo,
      completed: false
    };
    
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="mt-4 md:mt-6">
      <div className="flex justify-between items-center mb-3 md:mb-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-white flex items-center">
          Todo List
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </h2>
      </div>
      
      <div className="flex mb-3 md:mb-4">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent text-sm md:text-base"
          placeholder="Write here anything..."
          value={newTodo}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-primary dark:bg-primary-light text-white px-2 md:px-4 py-2 rounded-r-lg flex items-center text-sm md:text-base"
          onClick={addTodo}
        >
          <span className="hidden md:inline">Add to list</span>
          <span className="md:hidden">Add</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="space-y-2">
        {todos.length === 0 ? (
          <div className="text-center py-4 md:py-6 text-gray-500 dark:text-gray-400 text-sm md:text-base">
            Your todo list is empty
          </div>
        ) : (
          todos.map(todo => (
            <div
              key={todo.id}
              className="flex items-center p-2 md:p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-primary dark:text-primary-light focus:ring-primary dark:focus:ring-primary-light"
              />
              <span className={`flex-1 text-sm md:text-base ${todo.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'}`}>
                {todo.text}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList; 