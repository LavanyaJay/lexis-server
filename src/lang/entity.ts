import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, Length } from "class-validator";
import FlashCard from "../flashcard/entity";
@Entity()
export default class Lang extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Length(5, 25)
  @Column("text")
  name: string;

  @OneToMany(
    () => FlashCard,
    flashCard => flashCard.lang
  )
  flashCards: FlashCard[];
}
