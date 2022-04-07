import { Router } from "express";
import { UrlController } from "./controllers/UrlController";

export const routes = Router();

routes.post("/urls", new UrlController().handle);
