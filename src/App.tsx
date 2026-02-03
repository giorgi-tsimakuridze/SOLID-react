import { useEffect, useState } from "react";
import { Task, ITaskService } from "./services/ITaskService";
import { JsonTaskService } from "./services/JsonTaskService";
import "./App.css";

const taskService: ITaskService = new JsonTaskService();

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const data = await taskService.fetchTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleToggle = async (id: number, status: boolean) => {
    await taskService.toggleTask(id, status);
    loadTasks();
  };

  return (
    <div className="container">
      <h2>🎯 ჩემი დავალებები</h2>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="task-item"
          onClick={() => handleToggle(task.id, task.completed)}
        >
          <span className={task.completed ? "completed" : ""}>
            {task.title}
          </span>
          <span>{task.completed ? "✅" : "⏳"}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
