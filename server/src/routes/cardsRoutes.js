import express from "express";
import { getCards, getCardById } from "../controller/cards.js";

const cardsResourcePaths = express.Router();

cardsResourcePaths.get("/cards", getCards);
cardsResourcePaths.get("/cards/:id", getCardById);
export default cardsResourcePaths;
