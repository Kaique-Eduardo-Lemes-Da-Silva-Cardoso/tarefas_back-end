import { UpdateTaskService } from "@services/UpdateTaskService";
import { Request, Response } from "express";

class UpdateTaskController {
  async handle(request: Request, response: Response) {
    const { id, title, check } = request.body;
    const updateTaskService = new UpdateTaskService();

    const uptate = await updateTaskService.execute({ id, title, check });
    console.log(uptate);
    return response
      .status(200)
      .send(`Updated Title: ${uptate.title} check: ${uptate.check}`);
  }
}
export { UpdateTaskController };
