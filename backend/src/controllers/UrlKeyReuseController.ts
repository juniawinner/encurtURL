import { Request, RequestHandler, Response } from "express";
import { MongoEntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { Url } from "../entities/Url";
import { EncurtURLRepository } from "../repositories/EncurtURLRepository";
import { KeyReuseRepository } from "../repositories/KeyReuseRepository";

export class UrlKeyReuseController {
  handle: RequestHandler = async (req: Request, res: Response) => {
    const repository = new EncurtURLRepository(
      Url,
      new MongoEntityManager(AppDataSource)
    );

    try {
      let { encurt_url } = req.body;

      const e_url = await repository.findByEncurtURL(encurt_url);

      const reuse = e_url.filter(async function recycle(data: Url) {
        let chave = data.chave;
        let key_available = true;

        let keyReuse = KeyReuseRepository().create({ chave, key_available });
        await KeyReuseRepository().save(keyReuse);

        await repository.delete(data.id);

        return res.json("A URL foi excluída com sucesso");
      });
    } catch (error) {
      console.error(error);
    }
  };
}
