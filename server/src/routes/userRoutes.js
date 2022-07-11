import express from "express";
import jwtAuth from "../middlewares/jwtAuth.js";
import { multerUploads } from "../middlewares/multer.js";
import {
  deleteUserById,
  getProfile,
  getUserById,
  logIn,
  signUp,
  updateUser,
  uploadUserPicture,
} from "../controller/user.js";

const usersResourcePaths = express.Router();

usersResourcePaths.get("/user/:id", getUserById);
usersResourcePaths.get("/profile", jwtAuth, getProfile);
usersResourcePaths.post("/login", logIn);
usersResourcePaths.post("/signup", signUp);
usersResourcePaths.put("/user/:id", jwtAuth, updateUser);
usersResourcePaths.post(
  "/profileImage",
  jwtAuth,
  multerUploads.single("image"),
  uploadUserPicture
);
// usersResourcePaths.delete("/user/:id", deleteUserById);

export { usersResourcePaths };
