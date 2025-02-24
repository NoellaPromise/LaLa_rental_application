"use client";
import { CirclePlus, Trash2, CheckCircle } from "lucide-react";
import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 flex flex-col items-center">
      <div className="flex items-center mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyUp={handleKeyPress}
          className="flex-grow p-2 border rounded mr-2"
        />
        <button
          onClick={addTask}
          className="p-2 bg-[#DD7210] text-white rounded flex items-center"
        >
          <CirclePlus size={20} className="mr-1" />
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {tasks.map((task, i) => (
          <li
            key={i}
            className="flex items-center justify-between p-3 mb-2 border rounded"
          >
            <div className="flex items-center">
              <button
                onClick={() => toggleComplete(i)}
                className="mr-2 text-green-500"
              >
                <CheckCircle size={20} />
              </button>
              <span
                className={task.completed ? "line-through text-gray-500" : ""}
              >
                {task.text}
              </span>
            </div>
            <button onClick={() => deleteTask(i)} className="text-red-500">
              <Trash2 size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
