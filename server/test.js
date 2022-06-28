import * as dotenv from "dotenv";
dotenv.config();

function name(params) {
  console.log("process.env.SECRET_OR_KEY", process.env.SECRET_OR_KEY);
}
name();
