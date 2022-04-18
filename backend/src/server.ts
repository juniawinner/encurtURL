import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import { routes } from "./routes";
import "./database";
import { env } from "process";
import cors from "cors";
import { policyCORS } from "./policyCORS";

const app = express();
app.use(bodyParser.json());
app.use(routes);

app.use(cors(policyCORS));

app.listen(((env.DOMAIN = "http://localhost:8080/"), 8080), () =>
  console.log("Express server has started:", env.DOMAIN)
);
