import { Request, RequestHandler, Response } from "express";
import { MongoEntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { Url } from "../entities/Url";
import { EncurtURLRepository } from "../repositories/EncurtURLRepository";
import { KeyReuseRepository } from "../repositories/KeyReuseRepository";
import { UrlRepository } from "../repositories/UrlRepository";

export class UrlKeyReuseController {
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

        const reuse = e_url.filter(async function recycle(data: Url) {
          let chave = data.chave;
          let key_available = true;

          let keyReuse = KeyReuseRepository().create({ chave, key_available });
          await KeyReuseRepository().save(keyReuse);

          await repository.delete(data.id);
        });

        return res.json("A URL curta foi excluída com sucesso!");
      } catch (error) {
        console.error(error);
      }
    } else {
      return res.json("Ops! Essa URL curta não existe!");
    }
  };
}
