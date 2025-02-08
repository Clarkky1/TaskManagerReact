import React from 'react';
import TaskManager from './components/TaskManager';

import './App.css';

function App() {
  const tasks = [
    { id: 1, title: 'Coding', description: 'Do Flutter', completed: true },
    { id: 2, title: 'Study', description: 'Dart', completed: false },
    
  ];

  return (
    <div className="App">
      <TaskManager tasks={tasks} />
    </div>
  );
}

export default App;