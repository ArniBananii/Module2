import jsonwebtoken from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const issueToken = async (userId) => {
  const payload = {
    sub: userId,
    iss: "Rise-TCG",
  };

  const signOptions = {
    expiresIn: "1 d",
  };

  const token = jsonwebtoken.sign(
    payload,
    process.env.SECRET_OR_KEY,
    signOptions
  );
  return token;
};

export default issueToken;
