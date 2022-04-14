import { Request, RequestHandler, Response } from "express";
import { MongoEntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { Url } from "../entities/Url";
import { ChaveRepository } from "../repositories/ChaveRepository";

export class UrlKeyVisitController {
  handle: RequestHandler = async (req: Request, res: Response) => {
    const repository = new ChaveRepository(
      Url,
      new MongoEntityManager(AppDataSource)
    );

    try {
      const keyParams = await repository.findByChave(req.params.chave);

      const serverResponse = keyParams.filter(async function resposta(
        data: Url
      ) {
        res.redirect(301, data.original_url);

        let total_visits = data.total_visits + 1;

        await repository.update(data.id, { total_visits });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
