import { Request, Response } from "express";
import { MongoEntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { Url } from "../entities/Url";
import { UrlKeyVisitRepository } from "../repositories/UrlKeyVisitRepository";

export class UrlKeyVisitController {
  async handle(req: Request, res: Response) {
    let chave = req.params;
    console.log(chave);

    const repository = new UrlKeyVisitRepository(
      Url,
      new MongoEntityManager(AppDataSource)
    );
    const result = await repository.findByChave(req.params.chave);
    return res.json(result);
  }
}
