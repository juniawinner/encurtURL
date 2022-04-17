import { Request, RequestHandler, Response } from "express";
import { Chave } from "../entities/Chave";
import { KeyReuseRepository } from "../repositories/KeyReuseRepository";
import { ChaveService } from "../services/ChaveService";
import { UrlService } from "../services/UrlService";

export class UrlController {
  handle: RequestHandler = async (req: Request, res: Response) => {
    const repository = KeyReuseRepository();

    const searchAvailableKey = await repository.find({
      select: { key_available: true },
      where: { key_available: true },
    });

    let { original_url } = req.body;

    if (searchAvailableKey.find(async (data: Chave) => data.key_available)) {
      const chaveService = new ChaveService();
      const resultOne = await chaveService.execute({ original_url });

      return res.status(201).json(resultOne);
    } else {
      const urlService = new UrlService();
      const resultTwo = await urlService.execute({ original_url });

      return res.status(201).json(resultTwo);
    }
  };
}
