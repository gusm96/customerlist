import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userShcema = new mongoose.Schema({
  username: { type: String, require: true },
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

// bcrypt 이용해서 password hashing 하기 !!!!!!
userShcema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});
const User = mongoose.model("User", userShcema);

export default User;
