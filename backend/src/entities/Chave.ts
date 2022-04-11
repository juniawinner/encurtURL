import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Chave {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  chave!: string;

  @Column()
  key_available!: boolean;
}
