import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskManager({ tasks }) {
  const [showCompleted, setShowCompleted] = useState(false);
  const [showAll, setShowAll] = useState(true);

  const filteredTasks = showAll ? tasks : tasks.filter(task => showCompleted ? task.completed : !task.completed);

  return (
    <div>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? 'Show Incomplete Tasks' : 'Show Completed Tasks'}
      </button>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Incomplete Tasks Only' : 'Show All Tasks'}
      </button>
      <ul>
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;