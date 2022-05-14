import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { AppDataSource } from "./database";
import { routes } from "./routes";

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

const app = express();

const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "https://red-island-0c877810f.1.azurestaticapps.net",
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());

app.use(routes);

app.listen(port, () =>
  console.log(`Express server has started: http://localhost:${port}`)
);
