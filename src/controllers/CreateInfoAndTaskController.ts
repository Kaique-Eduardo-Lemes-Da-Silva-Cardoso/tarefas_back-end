import { CreateInfoAndTaskService } from "@services/CreateInfoAndTaskService";
import { Request, Response } from "express";

class CreateInfoAndTaskController{
    async handle(request:Request,response:Response){
        const {title} = request.body;
        const createInfoAndTaskService = new CreateInfoAndTaskService();
        const task =  await createInfoAndTaskService.Create({title});
        return response.json(task);


    }
  
}
export{CreateInfoAndTaskController};