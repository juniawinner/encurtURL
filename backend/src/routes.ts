import cors from "cors";
import { Router } from "express";
import { UrlController } from "./controllers/UrlController";
import { UrlKeyReuseController } from "./controllers/UrlKeyReuseController";
import { UrlKeyVisitController } from "./controllers/UrlKeyVisitController";
import { UrlRecoverDataController } from "./controllers/UrlRecoverDataController";
import { policyCORS } from "./policyCORS";

export const routes = Router();

routes.post("/urls", cors(policyCORS), new UrlController().handle);
routes.get("/urls", cors(policyCORS), new UrlRecoverDataController().handle);
routes.delete("/urls", cors(policyCORS), new UrlKeyReuseController().handle);

//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#route_parameters
//https://expressjs.com/pt-br/4x/api.html#req.params
routes.get("/:chave", cors(policyCORS), new UrlKeyVisitController().handle);
