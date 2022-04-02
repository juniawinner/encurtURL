import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Chave {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  chave: number;

  @Column()
  key_available: boolean;

  constructor(chave: number, key_available: boolean) {
    this.chave = chave;
    this.key_available = key_available;
  }
}
