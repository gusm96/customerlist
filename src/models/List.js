import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  date: { type: String, required: true },
  name: { type: String, required: true },
  account: { type: String, required: true },
  phNumber: { type: String, required: true },
  service: [{ type: String, trim: true, required: true }],
});
const List = mongoose.model("List", listSchema);

export default List;
