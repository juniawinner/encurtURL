import { MigrationInterface } from "typeorm";
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";

export class ChaveMigration1649320096030 implements MigrationInterface {
  public async up(mongoQueryRunner: MongoQueryRunner): Promise<void> {
    const insertResult = await mongoQueryRunner.insertOne("chave", {
      chave: 10001,
      key_available: true,
    });
    console.log("Inserted documents =>", insertResult);
  }

  public async down(mongoQueryRunner: MongoQueryRunner): Promise<void> {
    await mongoQueryRunner.deleteOne("chave", {
      chave: 10001,
      key_available: true,
    });
  }
}
