import { TaskRepositories } from "@repositories/TaskRepositories";
import { getCustomRepository } from "typeorm";

interface ICreateTask {
  title: string;
  check: boolean;
}

class CreateTaskService {
  async execute({ title, check }: ICreateTask) {
    const taskRepositories = getCustomRepository(TaskRepositories);
    
  }
}
export { CreateTaskService };
