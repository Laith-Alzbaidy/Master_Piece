const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Exercise name is required"],
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  numexercise: {
    type: Number,
    required: [true, "numexercise is required"],
  },
  time: { type: Number },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }],
});

const Training = mongoose.model("Training", trainingSchema);

module.exports = Training;
