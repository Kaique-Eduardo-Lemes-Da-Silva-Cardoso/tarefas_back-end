import { GetInfoTextServices } from "@services/GetInfoTextServices";
import { Request, Response } from "express";

class GetInfoTextController{
async handle(request:Request,response:Response){
const getInfoTextServices = new GetInfoTextServices();
const {infoId} =  request.body;
const text = await getInfoTextServices.execute({infoId});
return response.json(text);


}
}
export {GetInfoTextController};