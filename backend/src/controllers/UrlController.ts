import { Request, RequestHandler, Response } from "express";
import { env } from "process";
import { generateEncurtUrl } from "../decorators/GenerateEncurtUrl";
import { UrlRepository } from "../repositories/UrlRepository";

export class UrlController {
  @generateEncurtUrl
  chave!: string;

  handle: RequestHandler = async (req: Request, res: Response) => {
    try {
      let { original_url } = req.body;

      let chave = this.chave;
      let encurt_url = `${env.DOMAIN}${chave}`;

      let total_visits: number = 0;

      let data = UrlRepository().create({
        original_url,
        encurt_url,
        chave,
        total_visits,
      });
      await UrlRepository().save(data);

      return res.status(201).json(`A URL curta favorita é: ${encurt_url}`);
    } catch (error) {
      console.error(error);
    }
  };
}
