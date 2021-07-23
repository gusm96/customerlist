import mongoose from "mongoose";

const userShcema = new mongoose.Schema({
  username: { type: String, require: true },
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  password2: { type: String, require: true },
});

const User = mongoose.model("User", userShcema);

export default User;
