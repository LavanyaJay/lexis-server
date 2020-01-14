import { JsonController, Get, Param, Body, Post } from "routing-controllers";

import Lang from "./entity";

@JsonController()
export default class LangController {
  @Get("/langs/:id")
  getAdvertisement(@Param("id") id: number) {
    return Lang.findOne(id);
  }

  @Get("/langs")
  async allLang() {
    const langs = await Lang.find();
    return { langs: langs };
  }

  @Post("/langs")
  async createUser(@Body() lang: Lang) {
    const entity = await Lang.create(lang);
    return entity.save();
  }
}
