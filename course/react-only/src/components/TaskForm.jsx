import React, { useState } from "react";

export const TaskForm = ({
  tasks,
  setTasks,
  newTaskLabel,
  setNewTaskLabel,
}) => {
  const [category, setCategory] = useState("");

  // Taskの登録
  const handleAddTask = () => {
    const newTask = { label: newTaskLabel, isDone: false, category: category };
    setTasks([...tasks, newTask]);
    setNewTaskLabel("");
  };

  // 完了したTaskを削除する
  const handleClearTasks = () => {
    const newTasks = tasks.filter((task) => !task.isDone);
    setTasks(newTasks);
  };

  return (
    <>
    <h4>・カテゴリーを選んでください</h4>
      <input
        onChange={() => setCategory("課題")
}
        type="radio"
        value="課題"
        placeholder="Enter the task"
      />
      <label>課題</label>
      <input
        onChange={() =>setCategory("趣味")}
        type="radio"
        value="趣味"
        placeholder="Enter the task"
      />
      <label>趣味</label>
      <br />
      <h4>・タスクを入力してください</h4>
      <input
        onChange={(e) => {
          setNewTaskLabel(e.target.value);
        }}
        type="text"
        value={newTaskLabel}
        placeholder="Enter the task"
      />
    <br />
      <button onClick={handleAddTask}>Add</button>
      <br />
      <br />
      <h4>・全てのタスクを削除</h4>
      <button onClick={handleClearTasks}>Clear</button>
    </>
  );
};
