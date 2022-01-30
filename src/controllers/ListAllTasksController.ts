import { ListAllTasksService } from "@services/ListAllTasksService";
import { Request, Response } from "express";

class ListAllTasksController{
async handle(request:Request,response:Response){
    const listAllTasksService = new ListAllTasksService();
    const Data = await listAllTasksService.execute();
    return response.json(Data)

}
}
export{ListAllTasksController};