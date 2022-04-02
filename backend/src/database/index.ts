import "reflect-metadata";
import { DataSource } from "typeorm";
import { Url } from "../entities/Url";
import { UrlMigration1648870959909 } from "./migrations/1648870959909-UrlMigration";

export const AppDataSource = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "encurt",
  synchronize: false,
  logging: false,
  entities: [Url],
  migrations: [UrlMigration1648870959909],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
