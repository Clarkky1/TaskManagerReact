import './TaskItem.css';
import React from 'react';

function TaskItem({ task }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>
        Status: 
        <span className={`badge ${task.completed ? 'completed' : 'pending'}`}>
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </p>
    </div>
  );
}

export default TaskItem;