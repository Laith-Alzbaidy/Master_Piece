const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Exercise name is required"],
  },
  image: {
    type: String,
    required: [true, "image training in required "],
  },

  numexercise: {
    type: Number,
    // required: [true, "numexercise is required"],
    default: 0,
  },
  time: { type: Number },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }],
});

const Training = mongoose.model("Training", trainingSchema);

module.exports = Training;
