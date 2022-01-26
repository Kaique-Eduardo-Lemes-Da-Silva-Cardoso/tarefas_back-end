import { InfoRepositories } from "@repositories/InfoRepositories";
import { getCustomRepository } from "typeorm";
interface IUpdateInfo {
  id: string;
  text: string;
}

class UpdateInfoService {
  async execute({ id, text }: IUpdateInfo) {
    const infoRepositories = getCustomRepository(InfoRepositories);
    const texto = await infoRepositories.findOne({ id: id });
    console.log(texto);

    if (texto.text === text) {
      return text;
    }
    texto.text = text;

    await infoRepositories.save(texto);

    return texto;

  }
}
export { UpdateInfoService };
