import { TaskRepositories } from "@repositories/TaskRepositories";
import { getCustomRepository } from "typeorm";

class ListAllTasksService{
    async execute(){
        const taskRepositories = getCustomRepository(TaskRepositories);
        const allTasks  = await taskRepositories.find();
        return  allTasks;
    }
}
export{ListAllTasksService};