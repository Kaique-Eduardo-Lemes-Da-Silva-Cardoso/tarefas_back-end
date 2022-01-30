import { InfoRepositories } from "@repositories/InfoRepositories";
import { getCustomRepository } from "typeorm";
interface IInfo {
  text: string;
}

class CreateInfoService {
  async execute({ text }: IInfo) {
    const infoRepositories = getCustomRepository(InfoRepositories);
console.log(text);
    if (!text) {
      throw new Error("Cannot create the info");
    }

    const info = infoRepositories.create({ text });
    await infoRepositories.save(info);

    return info;
  }
}
export { CreateInfoService };
