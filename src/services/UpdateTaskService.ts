import { TaskRepositories } from "@repositories/TaskRepositories";
import { getCustomRepository } from "typeorm";

class UpdateTaskService{
    async execute(){
        const taskRepositories = getCustomRepository(TaskRepositories);
        
    }
}
export{UpdateTaskService};