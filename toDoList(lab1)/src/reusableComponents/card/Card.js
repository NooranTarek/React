import React from 'react';
import ReusableButton from '../button/Button';

export default function Card({ task, onDelete, onComplete }) {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <ReusableButton
        variant="warning"
        size="lg"
        onClick={() => onComplete(task.id)}
        content={task.completed ? 'not Complete' : 'Complete'}
      />
      <ReusableButton
        variant="danger"
        size="lg"
        onClick={() => onDelete(task.id)}
        content="Delete"
      />
    </div>
  );
}

