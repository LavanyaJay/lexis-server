import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, Length } from "class-validator";

@Entity()
export default class Lang extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Length(5, 25)
  @Column("text")
  name: string;
}
