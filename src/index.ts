import "reflect-metadata";
import { createKoaServer } from "routing-controllers";
import LangController from "../src/lang/controller";
import FlashController from "../src/flashcard/controller";
import setupDb from "./db";
const port = process.env.PORT || 4000;

const app = createKoaServer({
  cors: true,
  controllers: [LangController, FlashController]
});

setupDb()
  .then(_ => app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch(err => console.error(err));
