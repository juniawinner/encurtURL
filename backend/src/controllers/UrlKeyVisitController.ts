import { Request, Response } from "express";
import { MongoEntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { Url } from "../entities/Url";
import { UrlKeyVisitRepository } from "../repositories/UrlKeyVisitRepository";

export class UrlKeyVisitController {
  async handle(req: Request, res: Response) {
    const repository = new UrlKeyVisitRepository(
      Url,
      new MongoEntityManager(AppDataSource)
    );

    let total_visits = 2;
    const keyParams = await repository.findByChave(req.params.chave);
    const serverResponse = keyParams.filter(function keyValue(check: Url) {
      res.redirect(301, check.original_url);
      repository.update(check.id, { total_visits });
    });
  }
}
