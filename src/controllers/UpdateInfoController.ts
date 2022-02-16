import { UpdateInfoService } from "@services/UpdateInfoService";
import { Request, Response } from "express";

class UpdateInfoController{
async handle(resquest:Request,response:Response){
const{infoId,text} = resquest.body;

const updateInfoService = new UpdateInfoService();
const update = await updateInfoService.execute({infoId,text});

return response
.status(200)
.send({Updated:`text: ${update}`});
}
}
export{UpdateInfoController};