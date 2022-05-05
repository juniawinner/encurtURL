import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { routes } from "./routes";
import "./database";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());

app.use(routes);

app.listen(process.env.PORT || 8080, () =>
  console.log("Express server has started:", process.env.PORT)
);
