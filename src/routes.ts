import { CreateInfoController } from "@controllers/CreateInfoController";
import { CreateTaskController } from "@controllers/CreateTaskController";
import { DeleteOneTaskController } from "@controllers/DeleteOneTaskController";
import { UpdateInfoController } from "@controllers/UpdateInfoController";
import { UpdateTaskController } from "@controllers/UpdateTaskController";
import {Router}from "express";
const router = Router();
const createTaskController = new CreateTaskController();
const createInfoController = new CreateInfoController();
const updateInfoController = new UpdateInfoController();
const deleteOneTaskController = new DeleteOneTaskController();
const updateTaskController = new UpdateTaskController();

router.post("/CreateInfo", createInfoController.handle);
router.post("/CreateTask", createTaskController.handle);
router.post("/UpdateInfo",updateInfoController.handle);
router.post("/DeleteOneTask",deleteOneTaskController.handle);
router.post("/UpdateTask",updateTaskController.handle);


export{router};
