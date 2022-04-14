import { MongoRepository } from "typeorm";
import { Url } from "../entities/Url";

//https://typeorm.io/custom-repository
export class ChaveRepository extends MongoRepository<Url> {
  public async findByChave(chave: string): Promise<Url[]> {
    return this.find({
      where: {
        chave,
      },
    });
  }
}
