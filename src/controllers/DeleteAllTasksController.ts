import { DeleteAllTasksService } from "@services/DeleteAllTasksService";
import { Request, Response } from "express";

class DeleteAllTasksController{
async handle(resquest:Request,response:Response){
    const deleteAllTasksService = new DeleteAllTasksService();
    deleteAllTasksService.execute();
    return response.status(200).send({message:"All tasks was deleted !!!❌❌❌"});

}
}
export{DeleteAllTasksController};