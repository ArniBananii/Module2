import express from "express";
import jwtAuth from "../../middlewares/jwtAuth.js";
import { multerUploads } from "../../middlewares/multer.js";
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
usersResourcePaths.get("/test", jwtAuth, getProfile); //! will eb deleted again and jwt auth put in different routes
usersResourcePaths.post("/login", logIn);
usersResourcePaths.post("/signup", signUp);
usersResourcePaths.patch("/user/:id", updateUser);
usersResourcePaths.put(
  "/user/profileImage",
  multerUploads.single("image"),
  uploadUserPicture
);
usersResourcePaths.delete("/user/:id", deleteUserById);

export { usersResourcePaths };
