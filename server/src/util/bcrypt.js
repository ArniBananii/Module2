import bcrypt from "bcrypt";

const encryptPassword = async (password) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(password, salt);

    return hashPassword;
  } catch (error) {
    console.log("error hashing password", error);
  }
};

const verifyPassword = async (password, hashedPassword) => {
  const verfied = await bcrypt.compare(password, hashedPassword);
  console.log("verifyPassword", verfied);
  return verfied;
};
export { encryptPassword, verifyPassword };
