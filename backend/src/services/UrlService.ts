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

    let data = UrlRepository().create({
      original_url,
      encurt_url,
      chave,
      title,
      total_visits,
    });
    await UrlRepository().save(data);

    return `${encurt_url}`;
  }
}
