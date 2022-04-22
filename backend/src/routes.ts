import { Router } from "express";
import { UrlController } from "./controllers/UrlController";
import { UrlKeyReuseController } from "./controllers/UrlKeyReuseController";
import { UrlKeyVisitController } from "./controllers/UrlKeyVisitController";
import { UrlRecoverDataController } from "./controllers/UrlRecoverDataController";

export const routes = Router();

routes.post("/urls", new UrlController().handle);
routes.post("/urls/recover-data", new UrlRecoverDataController().handle);
routes.delete("/urls", new UrlKeyReuseController().handle);

//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#route_parameters
//https://expressjs.com/pt-br/4x/api.html#req.params
routes.get("/:chave", new UrlKeyVisitController().handle);
