import { TaskRepositories } from "@repositories/TaskRepositories";
import { getCustomRepository } from "typeorm";
interface IUpdateTask{
id:string;
title?:string;
check?:boolean;
}

class UpdateTaskService{
    async execute({id,title,check}:IUpdateTask){
        const taskRepositories = getCustomRepository(TaskRepositories);

        if (!id) {
            throw new Error("ID is empity ");
        }
        // if (!title&&check) {
        //     throw new Error("No data has change");
        // }

        const updateTask = await taskRepositories.findOne(id);

        updateTask.check = check ? check : updateTask.check;
        updateTask.title = title ? title :updateTask.title;
        await taskRepositories.save(updateTask);

return updateTask;

    }
}
export{UpdateTaskService};