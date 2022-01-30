import { CreateTaskService } from "@services/CreateTaskService";
import { Request, Response } from "express";

class CreateTaskController{
    async handle(request:Request,response:Response){
        const {title} = request.body;
        const createTaskService = new CreateTaskService()
        const task =  await createTaskService.Create({title});
        return response.json(task);


    }
  
}
export{CreateTaskController};