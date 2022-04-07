import { AppDataSource } from "../database";
import { Url } from "../entities/Url";

export const UrlRepository = () => {
  return AppDataSource.getMongoRepository(Url);
};
