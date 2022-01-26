import { UpdateInfoService } from "@services/UpdateInfoService";
import { Request, Response } from "express";

class UpdateInfoController{
async handle(resquest:Request,response:Response){
const{id,text} = resquest.body;

const updateInfoService = new UpdateInfoService();
const update = await updateInfoService.execute({id,text});

return response.json({"id":update.id,"text":update.text });

}
}
export{UpdateInfoController};