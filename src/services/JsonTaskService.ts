import axios from "axios";
import { ITaskService, Task } from "./ITaskService";

const API_URL = "http://localhost:5000/tasks";

export class JsonTaskService implements ITaskService {
  async fetchTasks(): Promise<Task[]> {
    const response = await axios.get(API_URL);
    return response.data;
  }

  async toggleTask(id: number, currentStatus: boolean): Promise<void> {
    await axios.patch(`${API_URL}/${id}`, { completed: !currentStatus });
  }
}
