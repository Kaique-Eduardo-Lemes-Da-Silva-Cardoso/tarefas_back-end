
import { CreateTaskController } from "@controllers/CreateTaskController";
import { DeleteAllTasksController } from "@controllers/DeleteAllTasksController";
import { DeleteOneTaskController } from "@controllers/DeleteOneTaskController";
import { UpdateInfoController } from "@controllers/UpdateInfoController";
import { UpdateTaskController } from "@controllers/UpdateTaskController";
import {Router}from "express";
const router = Router();
const createTaskController = new CreateTaskController();

const updateInfoController = new UpdateInfoController();
const deleteOneTaskController = new DeleteOneTaskController();
const updateTaskController = new UpdateTaskController();
const deleteAllTasksController = new DeleteAllTasksController();


router.post("/UpdateInfo",updateInfoController.handle);
router.post("/DeleteOneTask",deleteOneTaskController.handle);
router.post("/UpdateTask",updateTaskController.handle);
router.get("/DeleteAllTasks", deleteAllTasksController.handle);
router.post("/CreateTask", createTaskController.handle);


export{router};
