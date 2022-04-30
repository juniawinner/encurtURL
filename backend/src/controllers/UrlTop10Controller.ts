import { Request, RequestHandler, Response } from "express";
import { UrlTop10Service } from "../services/UrlTop10Service";

export class UrlTop10Controller {
  handle: RequestHandler = async (req: Request, res: Response) => {
    const service = new UrlTop10Service();

    const result = await service.execute();

    return res.json(result);
  };
}
