import express from "express";
import jwtAuth from "../middlewares/jwtAuth.js";
import {
  addCardToCollection,
  createCollection,
  deleteCollection,
  getCollection,
  removeCardFromCollection,
} from "../controller/collection.js";

const collectionResourcePaths = express.Router();

collectionResourcePaths.get(
  "/collection/:collectionId",
  jwtAuth,
  getCollection
);
collectionResourcePaths.post("/collection", jwtAuth, createCollection);
collectionResourcePaths.put(
  "/collection/:collectionId/:cardId",
  jwtAuth,
  addCardToCollection
);
collectionResourcePaths.delete(
  "/collection/:collectionId/:cardId",
  jwtAuth,
  removeCardFromCollection
);
collectionResourcePaths.delete(
  "/collection/:collectionId/",
  jwtAuth,
  deleteCollection
);

export { collectionResourcePaths };
