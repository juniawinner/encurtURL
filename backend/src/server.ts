import "reflect-metadata";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { routes } from "./routes";
import "./database";
import { env } from "process";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());

app.use(routes);

app.listen(((env.DOMAIN = "http://localhost:8080/"), 8080), () =>
  console.log("Express server has started:", env.DOMAIN)
);
