import express from "express";
import jwtAuth from "../../middlewares/jwtAuth.js";
import { createCollection, getCollection } from "../controller/collection.js";

const collectionResourcePaths = express.Router();

collectionResourcePaths.get(
  "/collection/:collectionId",
  jwtAuth,
  getCollection
);
collectionResourcePaths.post("/collection", jwtAuth, createCollection);
collectionResourcePaths.put(
  "collection/:collectionId",
  jwtAuth
  // addCardToCollection
);
collectionResourcePaths.delete(
  "collection/:collectionId/:cardId",
  jwtAuth
  // deleteCardFromCollection
);
collectionResourcePaths.delete(
  "collection/:collectionId/",
  jwtAuth
  // deleteCollection
);

export { collectionResourcePaths };
