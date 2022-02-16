import { InfoRepositories } from "@repositories/InfoRepositories";
import { TaskRepositories } from "@repositories/TaskRepositories";
import { getCustomRepository } from "typeorm";
interface IUpdateInfo {
  infoId: string;
  text: string;
}

class UpdateInfoService {
  async execute({ infoId, text }: IUpdateInfo) {
    const infoRepositories = getCustomRepository(InfoRepositories);
    //const taskRepositories = getCustomRepository(TaskRepositories);

   // const { infoId } = await taskRepositories.findOne(infoId);

    const texto = await infoRepositories.findOne({ id: infoId });
    console.log(texto);

    if (texto.text === text) {
      return texto.text;
    } else {
      texto.text = text;
    }

    await infoRepositories.save(texto);

    return texto.text;
  }
}
export { UpdateInfoService };
