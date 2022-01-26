import { CreateInfoController } from "@controllers/CreateInfoController";
import { CreateTaskController } from "@controllers/CreateTaskController";
import {Router}from "express";
const router = Router();
const createTaskController = new CreateTaskController();
const createInfoController = new CreateInfoController();

router.post("/CreateInfo", createInfoController.handle);
router.post("/CreateTask", createTaskController.handle);


export{router};
