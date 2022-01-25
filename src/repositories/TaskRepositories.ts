import { Task } from "@entities/Task";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Task)
class TaskRepositories extends Repository<Task>{}

export{TaskRepositories};