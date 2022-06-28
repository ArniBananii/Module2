import mongoose from "mongoose";

export const cardSchema = new mongoose.Schema({
  types: Array,
  subtypes: Array,
  rank: Number,
  name: String,
  summonerSkills: [
    {
      level: Number,
      skill: String,
      skillDetail: String,
    },
  ],
  healingPoints: Number,
  abilities: Array,
  baseEffect: [
    {
      effect: String,
      effectDetail: String,
    },
  ],
  actions: [
    {
      tossOfCoin: [
        {
          cost: String,
          success: {
            description: String,
            detail: String,
          },
          fail: {
            description: String,
            detail: String,
          },
        },
      ],
      directPurchase: [
        {
          cost: String,
          action: String,
          actionDetail: String,
        },
      ],
    },
  ],

  attack: Number,
  defence: Number,
  rarity: Array,
  cardNumber: String,
  flavourText: String,
  edition: String,
  illustrator: String,
  releaseYear: Number,
});
const Card = mongoose.model("card", cardSchema);
export default Card;
