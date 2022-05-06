import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { routes } from "./routes";
import "./database";

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());

app.use(routes);

app.listen(port, () =>
  console.log(`Express server has started: http://localhost:${port}`)
);
