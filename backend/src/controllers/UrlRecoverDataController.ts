import { Request, RequestHandler, Response } from "express";
import { MongoEntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { Url } from "../entities/Url";
import { EncurtURLRepository } from "../repositories/EncurtURLRepository";
import { UrlDTO } from "../dtos/UrlDTO";

export class UrlRecoverDataController {
  handle: RequestHandler = async (req: Request, res: Response) => {
    const repository = new EncurtURLRepository(
      Url,
      new MongoEntityManager(AppDataSource)
    );

    try {
      let { encurt_url } = req.body;

      const e_url = await repository.findByEncurtURL(encurt_url);

      const serverResponse = e_url.filter(async function resposta(data: Url) {
        const dto: UrlDTO = {
          original_url: data.original_url,
          chave: data.chave,
          total_visits: data.total_visits,
        };

        return res.json(dto);
      });
    } catch (error) {
      console.error(error);
    }
  };
}
