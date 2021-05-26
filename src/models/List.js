import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  date: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phNumber: { type: String, required: true },
  service: [{ type: String, trim: true, required: true }],
});

listSchema.static("formatService", function (service) {
  return service
    .split(",")
    .map((word) => (word.startsWith("✔") ? word : `✔${word}`));
});

const List = mongoose.model("List", listSchema);

export default List;
