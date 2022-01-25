import { Info } from "@entities/Info";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Info)
class InfoRepositories extends Repository<Info>{}

export{InfoRepositories};