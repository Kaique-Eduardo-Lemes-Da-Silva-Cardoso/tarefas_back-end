import { CreateInfoService } from "@services/CreateInfoService";
import { Request, Response } from "express";

class CreateInfoController{
    async handle(resquest:Request,response:Response){
        
    const{text}=resquest.body;
     
    const createInfoController = new CreateInfoService();

    const info = createInfoController.execute(text);

    return response.json(info);

    }
}
export {CreateInfoController};