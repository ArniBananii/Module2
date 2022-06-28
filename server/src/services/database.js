import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connectToDatabase = () => {
  try {
    mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
    });
    console.log("Connection to Mongo DB established");
  } catch (e) {
    console.log("error connecting to Mongo DB DB", e);
  }
};

// connectToDatabase();
// export default connectToDatabase
export { connectToDatabase };
