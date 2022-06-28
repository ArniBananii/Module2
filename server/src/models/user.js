import mongoose from "mongoose";
import { collectionSchema } from "./collection.js";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  userName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  collections: [collectionSchema],
  avatarPicture: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
