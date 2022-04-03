import { Router } from "express";
import { UrlController } from "./controllers/UrlController";
import { UrlRecoverDataController } from "./controllers/UrlRecoverDataController";
import { UrlReuseKeyController } from "./controllers/UrlReuseKeyController";
import { UrlVisitKeyController } from "./controllers/UrlVisitKeyController";

export const routes = Router();

routes.post("/urls", new UrlController().handle);
routes.get("/urls", new UrlRecoverDataController().handle);
routes.get("/:chave", new UrlVisitKeyController().handle);
routes.delete("/:chave", new UrlReuseKeyController().handle);
