import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class Url {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  original_url!: string;

  @Column()
  encurt_url!: string;

  @Column()
  chave!: string;

  @Column()
  title!: string;

  @Column()
  total_visits!: number;
}
