import { MigrationInterface } from "typeorm";
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";

export class ChaveMigration1649320096030 implements MigrationInterface {
  public async up(mongoQueryRunner: MongoQueryRunner): Promise<void> {
    const insertResult = await mongoQueryRunner.insertOne("chave", {
      chave: "a00a00a",
      key_available: false,
    });
    console.log("Inserted documents =>", insertResult);
  }

  public async down(mongoQueryRunner: MongoQueryRunner): Promise<void> {
    await mongoQueryRunner.deleteOne("chave", {
      chave: "a00a00a",
      key_available: false,
    });
  }
}
