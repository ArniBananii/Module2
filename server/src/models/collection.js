import mongoose from "mongoose";
import { cardSchema } from "./cards.js";

export const collectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  card: { type: [cardSchema], unique: true, required: false },
});

const CardCollection = new mongoose.model("collection", collectionSchema);
export default CardCollection;
