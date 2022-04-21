import { env } from "process";
import { generateEncurtUrl } from "../decorators/GenerateEncurtUrl";
import { UrlRepository } from "../repositories/UrlRepository";

type Original_Url = {
  original_url: string;
};

export class UrlService {
  @generateEncurtUrl
  chave!: string;

  async execute({ original_url }: Original_Url) {
    let chave = this.chave;
    let encurt_url = `${env.DOMAIN}${chave}`;

    let total_visits = 0;

    let data = UrlRepository().create({
      original_url,
      encurt_url,
      chave,
      total_visits,
    });
    await UrlRepository().save(data);

    return `${encurt_url}`;
  }
}
