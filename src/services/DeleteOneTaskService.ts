import { TaskRepositories } from "@repositories/TaskRepositories";
import { getCustomRepository } from "typeorm";

//deve apagar a task e o info
class DeleteOneTaskService {
   async execute(id:string){
       const taskRepositories = getCustomRepository(TaskRepositories);
if (!id) {
    throw new Error("ID is empity ");
}
const del = await taskRepositories.findOne(id);
if (!del) {
    throw new Error("The Task does not exist into database");
}

if (await taskRepositories.delete(id)) {
    return `The task ${del.title} was deleted`;
}



   }
}
export{DeleteOneTaskService};