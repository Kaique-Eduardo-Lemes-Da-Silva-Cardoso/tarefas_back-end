import { UpdateInfoService } from "@services/UpdateInfoService";
import { Request, Response } from "express";

class UpdateInfoController{
async handle(resquest:Request,response:Response){
const{taskId,text} = resquest.body;

const updateInfoService = new UpdateInfoService();
const update = await updateInfoService.execute({taskId,text});

return response
.status(200)
.send({Updated:`text: ${update}`});
}
}
export{UpdateInfoController};