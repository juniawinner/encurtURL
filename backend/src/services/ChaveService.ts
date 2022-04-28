import { env } from "process";
import { Chave } from "../entities/Chave";
import { KeyReuseRepository } from "../repositories/KeyReuseRepository";
import { UrlRepository } from "../repositories/UrlRepository";

type Original_Url = {
  original_url: string;
};

export class ChaveService {
  encurt_url!: string;

  async execute({ original_url }: Original_Url) {
    const repository = KeyReuseRepository();

    const search = await repository.find({
      select: { key_available: true, chave: true },
      where: { key_available: true },
    });

    try {
      search.find(async (data: Chave) => data.key_available);
      search.find(async (data: Chave) => {
        let chave = data.chave;
        let encurt_url = `${env.DOMAIN}${chave}`;
        this.encurt_url = encurt_url;

        let total_visits = 0;

        let organizeTitle = `${original_url}`;
        let o_url = new URL(organizeTitle);
        let path = o_url.pathname;
        let hash = o_url.hash;

        const replacePath = path.replace(/(\/|\-)/g, " ");
        const replaceHash = hash.replace(/(\#|\-|\=|\%|\~|\:)/g, " ");

        const firstLetter = replacePath;
        const firstCapitalLetter =
          firstLetter.charAt(1).toUpperCase() + firstLetter.slice(2);

        let title = firstCapitalLetter + ":" + replaceHash;

        let optionOne = UrlRepository().create({
          original_url,
          encurt_url,
          chave,
          title,
          total_visits,
        });
        await UrlRepository().save(optionOne);

        await repository.delete(data.id);
      });

      return `${this.encurt_url}`;
    } catch (error) {
      console.error(error);
    }
  }
}
