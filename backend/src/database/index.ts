import "reflect-metadata";
import { DataSource } from "typeorm";
import { Chave } from "../entities/Chave";
import { Url } from "../entities/Url";
import { UrlMigration1648870959909 } from "./migrations/1648870959909-UrlMigration";
import { ChaveMigration1648878332236 } from "./migrations/1648878332236-ChaveMigration";

export const AppDataSource = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "encurt",
  synchronize: false,
  logging: false,
  entities: [Url, Chave],
  migrations: [UrlMigration1648870959909, ChaveMigration1648878332236],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
