import { InfoRepositories } from "@repositories/InfoRepositories";
import { getCustomRepository } from "typeorm";
interface IGetInfo {
  infoId: string;
}

class GetInfoTextServices {
  async execute({ infoId }: IGetInfo) {
    const infoRepositories = getCustomRepository(InfoRepositories);
    const data = await infoRepositories.findOne({ where: { id: infoId } });
    const text = data.text;

    return text;
  }
}
export { GetInfoTextServices };
