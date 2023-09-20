const mongoose = require("mongoose");

// Define the exerciseSchema using the Mongoose.Schema constructor
const exerciseSchema = new mongoose.Schema({
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
  repeat: {
    type: String,
    default: 1,
    required: [true, "Exercise repeat count is required"],
  }, // Number of times to repeat the exercise (default is 1), must be provided and of Number type

  description: {
    type: String,
    // require: [true, "Exercise description is required"],
  },
  idTraining: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Training",
    require: [true, "Id training is required"],
  },
});

// Create a Mongoose model named "Exercise" based on the exerciseSchema
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
