import Card from "../models/cards.js";

const getCards = async (req, res) => {
  const types = req?.query?.types;
  const rarity = req?.query?.rarity;

  let cards;

  try {
    if (!types && !rarity) {
      cards = await Card.find({});
    }
    if (types && rarity) {
      cards = await Card.find({
        $and: [{ types: { $in: types } }, { rarity: { $eq: rarity } }],
      });
    }
    if (types && !rarity) {
      console.log("type", types);
      cards = await Card.find({ types: { $in: types } });
    }
    if (!types && rarity) {
      console.log("rarity", rarity);
      cards = await Card.find({ rarity: { $eq: rarity } });
    }
    res.status(201).json({ cards: cards });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Server error! unable to getCards", message: error });
  }
};

const getCardById = async (req, res) => {
  const id = req?.params?.id;

  try {
    const card = await Card.findById(id);
    res.status(201).json(card);
  } catch (e) {
    res
      .status(500)
      .json({ error: "Server error! unable to get cardsById", message: e });
  }
};

export { getCardById, getCards };
