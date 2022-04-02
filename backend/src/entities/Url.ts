import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Url {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  original_url: string;

  @Column("simple-json")
  url: { encurt_url: string; chave: number };

  @Column({ nullable: true })
  total_visits: number;

  @Column({ nullable: true })
  title: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(
    original_url: string,
    url: { encurt_url: string; chave: number },
    total_visits: number,
    title: string,
    created_at: Date
  ) {
    this.original_url = original_url;
    this.url = url;
    this.total_visits = total_visits;
    this.title = title;
    this.created_at = created_at;
  }
}
