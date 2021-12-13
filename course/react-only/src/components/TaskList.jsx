import React from "react";

export const TaskList = ({ tasks, setTasks }) => {
  // Taskの状態を切り替える
  const handleCheckBox = (e, i) => {
    const newTasks = tasks.map((task, _i) => {
      return _i === i ? { ...task, isDone: e.target.checked } : task;
    });
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={`todo-${index}`}>
          <input
            onChange={(e) => handleCheckBox(e, index)}
            type="checkbox"
            checked={task.isDone}
          />
          {task.isDone ? <s>{task.label}</s> : task.label}(
          {task.category ? (
            <span>{task.category} </span>
          ) : (
            <span>No Category</span>
          )}
          )
        </li>
      ))}
    </ul>
  );
};
