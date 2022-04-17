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

        let optionOne = UrlRepository().create({
          original_url,
          encurt_url,
          chave,
          total_visits,
        });
        await UrlRepository().save(optionOne);

        await repository.delete(data.id);
      });

      return `A URL curta favorita é: ${this.encurt_url}`;
    } catch (error) {
      console.error(error);
    }
  }
}
