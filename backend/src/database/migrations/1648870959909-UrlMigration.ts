import { MigrationInterface } from "typeorm";
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";

export class UrlMigration1648870959909 implements MigrationInterface {
  public async up(mongoQueryRunner: MongoQueryRunner): Promise<void> {
    const insertResult = await mongoQueryRunner.insertOne("urls", {
      original_url:
        "https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/",
      url: { encurt_url: "http://localhost:8080/10000", chave: 10000 },
      total_visits: 0,
      title: "MongoDB Driver Node - Inserir um documento",
      created_at: Date(),
    });
    console.log("Inserted documents =>", insertResult);
  }

  public async down(mongoQueryRunner: MongoQueryRunner): Promise<void> {
    await mongoQueryRunner.deleteOne("urls", {
      original_url:
        "https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/",
      url: { encurt_url: "http://localhost:8080/10000", chave: 10000 },
      total_visits: 0,
      title: "MongoDB Driver Node - Inserir um documento",
      created_at: Date(),
    });
  }
}
