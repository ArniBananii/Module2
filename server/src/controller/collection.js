import Card from "../models/cards.js";
import CardCollection from "../models/collection.js";
import User from "../models/user.js";

const createCollection = async (req, res) => {
  try {
    const existingCollection = await CardCollection.findOne({
      name: req.body.name,
    });
    if (existingCollection) {
      res.status(409).json({
        message: `the collection with the name${req.body.name} already exists`,
      });
    } else {
      const user = await User.findById(req.user._id);
      console.log("user", user);
      const newCollection = new CardCollection({
        name: req.body.name,
      });
      try {
        await newCollection.save();
        user.collections.push(newCollection);
        await user.save();
        res.status(200).json({ newCollection: newCollection, user: user });
      } catch (error) {
        res.status(409).json({
          message: "error while saving new collection occured",
          error: error,
        });
      }
    }
  } catch (error) {
    res
      .status(409)
      .json({ messame: "collection creation not possible", error: error });
  }
};
const addCardToCollection = async (req, res) => {
  const collectionId = req?.params?.collectionId;
  const cardId = req?.params?.cardId;
  try {
    const card = await Card.findById(cardId);

    const collectionCollection = await CardCollection.findById(collectionId);

    const user = await User.findById(req.user._id);

    if (collectionCollection && user) {
      collectionCollection.card.push(card);

      const userCollection = user.collections.find(
        (collection) => (collection._id = collectionId)
      );

      if (userCollection) {
        userCollection.card.push(card);

        const index = user.collections.indexOf(userCollection);

        if (index > -1) {
          user.collections.splice(index, 1);
        }
        user.collections.push(userCollection);
        await user.save();
        await collectionCollection.save();
        return res
          .status(200)
          .json({ collection: collectionCollection, user: user });
      }
    } else {
      return res
        .status(409)
        .json({ message: "error while saving card into collections" });
    }
  } catch (error) {
    res.status(409).json({
      message: `card with id: ${cardId} or cardCollection with id: ${collectionId} do not exists`,
    });
  }
};

const removeCardFromCollection = async (req, res) => {
  const collectionId = req?.params?.collectionId;
  const cardId = req?.params?.cardId;
  try {
    const user = await User.findById(req.user._id);
    const collectionCollection = await CardCollection.findById(collectionId);

    if (user) {
      const userCollection = user.collections.find(
        (collection) => (collection._id = collectionId)
      );

      if (userCollection) {
        const cardToRemove = userCollection.card.find(
          (card) => (card._id = cardId)
        );
        console.log("cardToRemove", cardToRemove);
        const cardIndex = userCollection.card.indexOf(cardToRemove);
        const cardCollectionIndex =
          collectionCollection.card.indexOf(cardToRemove);
        if (!cardToRemove) {
          res
            .status(409)
            .json({ message: "this card has already been removed" });
        }

        if (cardIndex > -1 || cardCollectionIndex > -1) {
          userCollection.card.splice(cardIndex, 1);
          collectionCollection.card.splice(cardCollectionIndex, 1);
        }
        const collectionIndex = user.collections.indexOf(userCollection);
        if (collectionIndex > -1) {
          user.collections.splice(collectionIndex, 1);
        }
        user.collections.push(userCollection);
        await collectionCollection.save();
        await user.save();
        res.status(200).json({ collection: userCollection });
      }
    }
  } catch (error) {
    res.status(409).json({ message: "something went wrong!", error: error });
  }
};
const deleteCollection = async (req, res) => {
  const collectionId = req?.params?.collectionId;
  const user = await User.findById(req.user._id);

  try {
    if (user) {
      const userCollection = user.collections.find(
        (collection) => (collection._id = collectionId)
      );
      if (userCollection) {
        const index = user.collections.indexOf(userCollection);
        if (index > -1) {
          user.collections.splice(index, 1);
        }
        await user.save();
        await CardCollection.findByIdAndDelete(collectionId);
        return res.status(200).json({
          message: `collection with ID: ${collectionId} deleted`,
          collections: userCollection,
        });
      }
    }
  } catch (error) {
    res
      .status(409)
      .json({ message: `collection coudnt be deleted`, error: error });
  }
};

const getCollection = async (req, res) => {
  const collectionId = req?.params?.collectionId;
  try {
    const collection = await CardCollection.findById(collectionId);
    res.status(200).json(collection);
  } catch (error) {
    res
      .status(409)
      .json({ message: `collection ID:${collectionId} coudn't be found` });
  }
};

export {
  createCollection,
  addCardToCollection,
  removeCardFromCollection,
  getCollection,
  deleteCollection,
};
