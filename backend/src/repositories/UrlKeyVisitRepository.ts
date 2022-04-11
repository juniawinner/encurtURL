import { MongoRepository } from "typeorm";
import { Url } from "../entities/Url";

export class UrlKeyVisitRepository extends MongoRepository<Url> {
  public async findByChave(chave: string): Promise<Url[]> {
    return this.find({
      where: {
        chave,
      },
    });
  }
}
