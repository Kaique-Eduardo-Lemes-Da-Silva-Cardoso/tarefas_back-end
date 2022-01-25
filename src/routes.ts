import { CreateTaskController } from "@controllers/CreateTaskController";
import {Router}from "express";
const router = Router();
const createTaskController = new CreateTaskController();


router.post("/createTask", createTaskController.handle);


export{router};
