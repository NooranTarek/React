import React, { useState } from "react";
import ReusableButton from "../../reusableComponents/button/Button";
import Card from "../../reusableComponents/card/Card";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import background from "../../assets/images/back.jpg";

import "./list.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
      const newTaskContent = {
        id: tasks.length + 1,
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskContent]);
      setNewTask("");
  };

  const deleteSpecificTask = (id) => {
    const isExist = tasks.findIndex((task) => task.id === id);
    if (isExist !== -1) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const markCompletedTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };
  

  return (
    <div className="todo-list">
      <img className="img1" src={background} alt="not found" />
      <h2>To Do List</h2>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <ReusableButton
          onClick={addNewTask}
          content="Add"
          variant="success"
          size="lg"
        />
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <Card
            key={`task_${task.id}`}
            task={task}
            onDelete={deleteSpecificTask}
            onComplete={markCompletedTask}
          />
        ))}
      </div>
    </div>
  );
}
