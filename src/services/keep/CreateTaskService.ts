import { TaskRepositories } from "@repositories/TaskRepositories";
import { getCustomRepository } from "typeorm";

interface ICreateTask {
  title: string;
  check?:boolean;
}

class CreateTaskService {
  async execute({ title,check }: ICreateTask) {
    const taskRepositories = getCustomRepository(TaskRepositories);

    if (!title) {
        throw new Error("cannot create a null task");
    }
    console.log(`title: ${title} check: ${check}`);
    
    const task = taskRepositories.create({title, check:false});

    await taskRepositories.save(task);

    return task;

  }
}
export { CreateTaskService };