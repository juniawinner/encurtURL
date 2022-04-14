import { MongoRepository } from "typeorm";
import { Url } from "../entities/Url";

//https://typeorm.io/custom-repository
export class EncurtURLRepository extends MongoRepository<Url> {
  public async findByEncurtURL(encurt_url: string): Promise<Url[]> {
    return this.find({
      where: {
        encurt_url,
      },
    });
  }
}
