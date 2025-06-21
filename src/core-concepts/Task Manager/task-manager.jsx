import { useState } from "react";
import "../../app.css";
export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  /**
   *
   *   Function to handle adding a new task
   * This function will be called when the "Add Task" button is clicked
   *
   */
  const handleAddTask = (event) => {
    event.preventDefault();
    if (text.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), title: text, completed: false }]);
    setText("");
  };
  /**
   *
   * Function to toggle the completed status of a task
   *This function will be called when a task is clicked
   */
  const toggleCompletedStatus = (key) => {
    setTasks(
      tasks.map((task) =>
        task.id === key ? { ...task, completed: !task.completed } : task
      )
    );
    // or: setTasks(tasks.map(task => task.id === key ? {...task, completed: !task.completed} : task));
  };

  const deleteTask = (key) => {
    setTasks(
      tasks.filter((f) => f.id !== key)
      // or: tasks.filter((task) => task.id !== key)
    );
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <ol>
        {tasks.map((t) => (
          <li
            onClick={() => toggleCompletedStatus(t.id)}
            key={t.id}
            className={`task-item ${t.completed ? "completed" : ""}`}
          >
            {t.title}
            <button
              className="delete-task-button"
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(t.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
      <div className="input-area">
        <input
          type="text"
          placeholder="Enter task title"
          className="task-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddTask(e);
          }}
        />

        <button className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
        <p className="task-count">
          {tasks.filter((task) => !task.completed).length} task
          {tasks.filter((task) => !task.completed).length !== 1 ? "s" : ""}{" "}
          remaining
        </p>
      </div>
      <p className="devil-banner-footer">
        © 2025 <strong>DEVIL</strong> — <em>DEVeloper wIth eviL design</em>. All
        rights reserved.
      </p>
    </div>
  );
}
