import { CreateTaskService } from "@services/CreateTaskService";
import { Request, Response } from "express";

class CreateTaskController{
async handle(request:Request,response:Response){
const {title,check} = request.body;
const createTaskService = new CreateTaskService();
const task = createTaskService.execute({title,check});
return response.json(task);
}
    
}
export{CreateTaskController};