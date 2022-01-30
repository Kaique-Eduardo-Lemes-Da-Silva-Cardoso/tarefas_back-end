import { CreateInfoService } from "@services/keep/CreateInfoService";
import { Request, Response } from "express";

class CreateInfoController{
    async handle(resquest:Request,response:Response){
        
    const{text}=resquest.body;
     console.log(`controller ${text}`);
    const createInfoController = new CreateInfoService();

    const info = createInfoController.execute({text});

    return response.json(info);

    }
}
export {CreateInfoController};