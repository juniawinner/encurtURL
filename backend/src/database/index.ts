import "reflect-metadata";
import { DataSource } from "typeorm";
import { Chave } from "../entities/Chave";
import { Url } from "../entities/Url";
import { UrlMigration1649316703628 } from "./migrations/1649316703628-UrlMigration";
import { ChaveMigration1649320096030 } from "./migrations/1649320096030-ChaveMigration";

export const AppDataSource = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "encurt",
  synchronize: false,
  logging: false,
  entities: [Url, Chave],
  migrations: [UrlMigration1649316703628, ChaveMigration1649320096030],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
