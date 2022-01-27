import { TaskRepositories } from "@repositories/TaskRepositories";
import { getCustomRepository } from "typeorm";

class DeleteAllTasksService {
  async execute() {
    const taskRepositories = getCustomRepository(TaskRepositories);
    const Tasks = await taskRepositories.find();
    console.log(Tasks);

    Tasks.map(async (task)=>{
       await taskRepositories.delete(task.id);
   })

  }
}
export { DeleteAllTasksService };
