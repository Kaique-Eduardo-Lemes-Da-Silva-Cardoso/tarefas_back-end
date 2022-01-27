import { DeleteOneTaskService } from "@services/DeleteOneTaskService";
import { Request, Response } from "express";

class DeleteOneTaskController{
async handle(request:Request,respose:Response){
    const id = request.body;
    const deleteOneTaskService = new DeleteOneTaskService();
    const message = await deleteOneTaskService.execute(id);
    return respose.json({"message":message});
}

}
export {DeleteOneTaskController};