import React from 'react';
import TaskManager from './components/TaskManager';

import './App.css';

function App() {
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1', completed: true },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', completed: false },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', completed: true },
    { id: 4, title: 'Task 4', description: 'Description for Task 4', completed: false },
  ];

  return (
    <div className="App">
      <TaskManager tasks={tasks} />
    </div>
  );
}

export default App;