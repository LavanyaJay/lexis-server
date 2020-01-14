import { JsonController, Get, Param, Body, Post } from "routing-controllers";
import Lang from "../lang/entity";
import FlashCard from "./entity";

@JsonController()
export default class FlashCardController {
  @Get("/flashcards/:id")
  getFlashCard(@Param("id") id: number) {
    return FlashCard.findOne(id);
  }

  @Get("/lang/:id/flashcards")
  async allFlashCards(@Param("id") langId: number) {
    const lang = await Lang.findOne(langId);
    const flashCards = await FlashCard.find({ where: { lang } });
    return { flashcards: flashCards };
  }

  @Post("/lang/:id/flashcards")
  async createFlashCard(
    @Param("id") langId: number,
    @Body() flashCard: FlashCard
  ) {
    const lang = await Lang.findOne(langId);
    const entity = await FlashCard.create({ ...flashCard, lang });
    return entity.save();
  }
}
