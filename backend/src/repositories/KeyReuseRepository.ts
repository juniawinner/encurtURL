import { AppDataSource } from "../database";
import { Chave } from "../entities/Chave";

export const KeyReuseRepository = () => {
  return AppDataSource.getMongoRepository(Chave);
};
