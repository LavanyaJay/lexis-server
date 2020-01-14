import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, Length } from "class-validator";
import Lang from "../lang/entity";

@Entity()
export default class FlashCard extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Length(1, 25)
  @Column("text")
  word: string;

  @IsString()
  @Length(1, 25)
  @Column("text")
  meaning: string;

  @ManyToOne(() => Lang)
  lang: Lang;
}
