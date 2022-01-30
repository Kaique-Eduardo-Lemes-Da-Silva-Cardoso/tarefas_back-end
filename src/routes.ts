import { CreateInfoAndTaskController } from "@controllers/CreateInfoAndTaskController";
import { CreateInfoController } from "@controllers/CreateInfoController";
import { CreateTaskController } from "@controllers/CreateTaskController";
import { DeleteAllTasksController } from "@controllers/DeleteAllTasksController";
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
const deleteAllTasksController = new DeleteAllTasksController();
const createInfoAndTaskController = new CreateInfoAndTaskController()
router.post("/CreateInfo", createInfoController.handle);
router.post("/CreateTask", createTaskController.handle);
router.post("/UpdateInfo",updateInfoController.handle);
router.post("/DeleteOneTask",deleteOneTaskController.handle);
router.post("/UpdateTask",updateTaskController.handle);
router.get("/DeleteAllTasks", deleteAllTasksController.handle);
router.post("/CreateInfoTask", createInfoAndTaskController.handle);


export{router};
