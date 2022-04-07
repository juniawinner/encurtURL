import { MigrationInterface } from "typeorm";
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";

export class UrlMigration1649316703628 implements MigrationInterface {
  public async up(mongoQueryRunner: MongoQueryRunner): Promise<void> {
    const insertResult = await mongoQueryRunner.insertOne("url", {
      original_url:
        "https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/",
      encurt_url: "http://localhost:8080/10000",
      chave: 10000,
      total_visits: 0,
    });
    console.log("Inserted documents =>", insertResult);
  }

  public async down(mongoQueryRunner: MongoQueryRunner): Promise<void> {
    await mongoQueryRunner.deleteOne("url", {
      original_url:
        "https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/",
      encurt_url: "http://localhost:8080/10000",
      chave: 10000,
      total_visits: 0,
    });
  }
}
