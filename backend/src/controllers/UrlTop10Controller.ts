import { Request, RequestHandler, Response } from "express";
import { UrlDTO } from "../dtos/UrlDTO";

export class UrlTop10Controller {
  dto!: UrlDTO;

  handle: RequestHandler = async (req: Request, res: Response) => {};
}
