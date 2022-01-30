import { InfoRepositories } from "@repositories/InfoRepositories";
import { TaskRepositories } from "@repositories/TaskRepositories";
import { getCustomRepository } from "typeorm";

interface IITCreate {
  title: string;
 
}

class CreateTaskService {
  async Create({ title }: IITCreate) {
    const infoRepositories = getCustomRepository(InfoRepositories);
    const taskRepositories = getCustomRepository(TaskRepositories);
    const startInfoText = "";
    const infoSave = infoRepositories.create({ text: startInfoText });
    await infoRepositories.save(infoSave);
    const infoData = infoRepositories.find();

    const info = (await infoData).reverse();
    console.log(infoData);
    console.log(info);

    const task = taskRepositories.create({
      title,
      infoId: info[0].id,
      
      check: false,
    });
    await taskRepositories.save(task);

    return task;
  }
}
export { CreateTaskService };
