import mongoose from "mongoose";

export const cardSchema = new mongoose.Schema({
  types: Array,
  subtypes: Array,
  rank: Number,
  name: String,
  summonerSkills: [
    {
      _id: false,
      level: Number,
      skill: String,
      skillDetail: String,
    },
  ],
  healingPoints: Number,
  abilities: Array,
  baseEffect: [
    {
      _id: false,
      effect: String,
      effectDetail: String,
    },
  ],
  actions: [
    {
      _id: false,
      tossOfCoin: [
        {
          cost: String,
          _id: false,
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
          _id: false,
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
