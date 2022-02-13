import { TaskRepositories } from "@repositories/TaskRepositories";
import { getCustomRepository } from "typeorm";

class ListAllTasksService{
    async execute(){
        const taskRepositories = getCustomRepository(TaskRepositories);
        const allTasks  = await taskRepositories.find();
        const tasks = allTasks.map(data=>({"id":data.id,"title":data.title,"completed":data.check}))
        return  tasks;
    }
}
export{ListAllTasksService};