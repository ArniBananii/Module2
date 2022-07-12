import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

import {
  PORT,
  STATUS_RESOURCE_PATH,
  RESOURCE_PATH,
} from "../src/constants/local.js";
import cardsResourcePaths from "./routes/cardsRoutes.js";
import { statusResourcePaths } from "./routes/statusRoutes.js";
import { usersResourcePaths } from "./routes/userRoutes.js";
import { collectionResourcePaths } from "./routes/collectionRoutes.js";
import { connectToDatabase } from "./services/database.js";
import passport from "passport";
import { passportConfig } from "./config/passportConfig.js";
import { cloudinaryConfig } from "./config/cloudinaryConfig.js";

const app = express();

app.use(cors({}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(RESOURCE_PATH, cardsResourcePaths);
app.use(RESOURCE_PATH, usersResourcePaths);
app.use(RESOURCE_PATH, collectionResourcePaths);
app.use(STATUS_RESOURCE_PATH, statusResourcePaths);
app.use(passport.initialize());

passportConfig(passport);
cloudinaryConfig();
//!
connectToDatabase();
app.listen(PORT, () => {
  console.log(
    `The server application is listening at http://localhost:${PORT}`
  );
});
