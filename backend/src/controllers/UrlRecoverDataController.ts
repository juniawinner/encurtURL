import { Request, RequestHandler, Response } from "express";
import { MongoEntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { Url } from "../entities/Url";
import { EncurtURLRepository } from "../repositories/EncurtURLRepository";
import { UrlDTO } from "../dtos/UrlDTO";
import { UrlRepository } from "../repositories/UrlRepository";

export class UrlRecoverDataController {
  dto!: UrlDTO;

  handle: RequestHandler = async (req: Request, res: Response) => {
    let { encurt_url } = req.body;
    let excludePossibleBlanks = `${encurt_url}`;
    let url = excludePossibleBlanks.trim();

    const repo = UrlRepository();

    const search = await repo.find({
      select: { encurt_url: true },
      where: { encurt_url: `${url}` },
    });

    if (search.find(async (dataEncurt: Url) => dataEncurt.encurt_url)) {
      const repository = new EncurtURLRepository(
        Url,
        new MongoEntityManager(AppDataSource)
      );

      try {
        const e_url = await repository.findByEncurtURL(url);

        const serverResponse = e_url.filter(async (data: Url) => {
          this.dto = {
            title: data.title,
            chave: data.chave,
            total_visits: data.total_visits,
          };
        });

        return res.status(201).json(this.dto);
      } catch (error) {
        console.error(error);
      }
    } else {
      return res.status(200).json("Ops! Essa URL curta não existe!");
    }
  };
}
