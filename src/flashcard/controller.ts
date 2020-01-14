import { JsonController, Get, Param, Body, Post } from "routing-controllers";

import FlashCard from "./entity";

@JsonController()
export default class FlashCardController {
  @Get("/flashcards/:id")
  getFlashCard(@Param("id") id: number) {
    return FlashCard.findOne(id);
  }

  @Get("/flashcards")
  async allFlashCards() {
    const flashCards = await FlashCard.find();
    return { flashcards: flashCards };
  }

  @Post("/flashcards")
  async createFlashCard(@Body() flashCard: FlashCard) {
    const entity = await FlashCard.create(flashCard);
    return entity.save();
  }
}
