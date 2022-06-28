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
const updateCollection = async (req, res) => {};

const deleteCollection = async (req, res) => {};

const getCollection = async (req, res) => {
  const collectionId = req?.params?.collectionId;
};

export { createCollection, deleteCollection, getCollection };
