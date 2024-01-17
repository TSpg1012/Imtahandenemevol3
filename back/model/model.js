const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    id: String,
    name: String,
    price: Number,
    type: String,
  },
  { collection: "Exam3" }
);

const User = mongoose.model("Exam3", schema);

module.exports = User;
