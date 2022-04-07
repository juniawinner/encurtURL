import { Request, RequestHandler, Response } from "express";
import { generateEncurtUrl } from "../decorators/GenerateEncurtUrl";
import { UrlRepository } from "../repositories/UrlRepository";

export class UrlController {
  @generateEncurtUrl
  chave!: string | number;
  handle: RequestHandler = (req: Request, res: Response) => {
    try {
      let { original_url } = req.body;
      let encurt_url = `http://localhost:8080/${this.chave}`;

      let e_url = new URL(encurt_url);
      let chave = e_url.pathname;
      console.log(chave);

      let total_visits: number = 0;

      let data = UrlRepository().create({
        original_url,
        encurt_url,
        chave,
        total_visits,
      });
      UrlRepository().save(data);

      return res.status(201).json(`A URL curta favorita é: ${encurt_url}`);
    } catch (error) {
      console.error(error);
    }
  };
}
