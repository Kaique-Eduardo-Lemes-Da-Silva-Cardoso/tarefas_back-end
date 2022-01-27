import { TaskRepositories } from "@repositories/TaskRepositories";
import { getCustomRepository } from "typeorm";
interface IUpdateTask {
  id: string;
  title?: string;
  check?: boolean;
}

class UpdateTaskService {
  async execute({ id, title, check }: IUpdateTask) {
    const taskRepositories = getCustomRepository(TaskRepositories);

    if (!id) {
      throw new Error("ID is empity ");
    }

    const updateTask = await taskRepositories.findOne(id);

    updateTask.check = check != null ? check : updateTask.check;
    updateTask.title = title != "" ? title : updateTask.title;

    await taskRepositories.save(updateTask);
    console.log(`Service ${updateTask}`);
    return updateTask;
  }
}
export { UpdateTaskService };
