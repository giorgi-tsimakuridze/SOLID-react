export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITaskService {
  fetchTasks(): Promise<Task[]>;
  toggleTask(id: number, currentStatus: boolean): Promise<void>;
}
