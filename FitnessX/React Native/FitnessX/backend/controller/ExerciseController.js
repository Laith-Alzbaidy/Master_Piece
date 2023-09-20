const Training = require("../models/modelTraining");
const Exercise = require("../models/modelExercise");

// Controller function to get all exercises
exports.GetAllExercise = async (req, res) => {
  try {
    // Retrieve all exercises from the database
    const exercise = await Exercise.find();
    // Respond with a 200 status code and the array of exercise data
    res.status(200).json({
      status: "success",
      data: exercise,
    });
  } catch (err) {
    // Handle errors that occur during database interaction
    res.status(404).json({
      status: "failed",
      massage: err,
    });
  }
};
