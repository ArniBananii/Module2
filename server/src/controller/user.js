import User from "../models/user.js";
import { v2 as cloudinary } from "cloudinary";
import { encryptPassword, verifyPassword } from "../util/bcrypt.js";
import issueToken from "../util/jwt.js";

const getUserById = async (req, res) => {
  const id = req?.params?.id;
  try {
    const user = await User.findById(id);
    console.log("user", user);
    res.status(200).json({ user: user });
  } catch (e) {
    res
      .status(500)
      .json({ error: "Server error! unable to getUserById", message: e });
  }
};
//? req.body.email or userName later as value
const signUp = async (req, res) => {
  try {
    console.log(req.body);
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      res.status(409).json({ message: "user already exists" });
    } else {
      const hashedPassword = await encryptPassword(req.body.password);
      console.log("hashedPassword", hashedPassword);

      const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword,
        avatarPicture: req.body.avatarPicture, //? pic must be default send with front-end
      });
      try {
        await newUser.save();
        res.status(201).json({
          message: "user registered",
        });
      } catch (error) {
        res
          .status(409)
          .json({ message: "error while saving new user", error: error });
      }
    }
  } catch (error) {
    res
      .status(401)
      .json({ message: "registration not possible", error: error });
  }
};

const logIn = async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (!existingUser) {
    res.status(401).json({
      messag: "you have to register first",
    });
  } else {
    const verified = await verifyPassword(
      req.body.password,
      existingUser.password
    );

    if (!verified) {
      res.status(401).json({
        messag: "wrong password",
      });
    } else {
      // console.log("verified", verified);
      // console.log("logged in successful");
      const token = await issueToken(existingUser.id);

      res.status(200).json({
        msg: "logging succesful",
        user: {
          userName: existingUser.userName,
          email: existingUser.email,
          id: existingUser._id,
          avatarPicture: existingUser.avatarPicture,
        },
        token,
      });
    }
  }
};
const uploadUserPicture = async (req, res) => {
  try {
    console.log("req.file", req.file); //Multer is storing the file in that property(object) of the request object
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "UserProfile-Image",
      //TODO: templating! send id for specific user via req.user._id and append it!
    });
    console.log("result", uploadResult); //this show us the object with all the information about the upload, including the public URL in result.url
    res.status(200).json({
      message: "image succesfully uploaded",
      imageUrL: uploadResult.url,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "image couldn't be uploaded", error: error });
  }
};
//? needs to be finished with incoming data to be updated
const updateUser = async (req, res) => {
  const _id = req?.params?.id;
  try {
    if (_id) {
      await User.findByIdAndUpdate(req.user._id, {
        userName: req.body.userName,
      });
      res
        .status(200)
        .json({ message: `changed username to ${req.body.userName}` });
    }
  } catch (e) {
    res
      .status(500)
      .json({ error: "Server error! unable to updateUser", message: e });
  }
};

const deleteUserById = async (req, res) => {
  const _id = req?.params?.id;

  try {
    const user = await User.findByIdAndDelete(_id);

    res.json({ SUCCESS: `You deleted user ${user.userName}:${_id} profile` });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Server error! unable to deleteUserById", error: e });
  }
};

const getProfile = async (req, res) => {
  console.log("req.user", req.user);
  try {
    res.status(200).json({
      email: req.user.email,
      userName: req.user.userName,
      avatarPicture: req.user.avatarPicture,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Server error! unable to get profile", message: error });
  }
};

export {
  getProfile,
  getUserById,
  signUp,
  deleteUserById,
  updateUser,
  logIn,
  uploadUserPicture,
};
