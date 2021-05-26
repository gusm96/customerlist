import mongoose from "mongoose";

const reserveSchema = new mongoose.Schema({
  date: { type: String, required: true },
  name: { type: String, required: true },
  phNumber: { type: String, required: true },
  menu: [{ type: String, trim: true, required: true }],
  order: { type: String, required: true },
});

reserveSchema.static("formatReserver", function (menu) {
  return menu
    .split(",")
    .map((word) => (word.startsWith("✔") ? word : `✔${word}`));
});

const Reservation = mongoose.model("Reservation", reserveSchema);

export default Reservation;
