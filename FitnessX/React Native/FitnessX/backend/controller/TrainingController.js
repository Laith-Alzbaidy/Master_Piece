const Training = require("../models/modelTraining");

// Controller function to get all trainings
exports.GetAllTraining = async (req, res) => {
  try {
    // Retrieve all trainings from the database
    const training = await Training.find().populate("exercises");
    // Respond with a 200 status code and the array of training data
    res.status(200).json({
      status: "success",
      data: training,
    });
  } catch (err) {
    // Handle errors that occur during database interaction
    res.status(404).json({
      status: "failed",
      massage: err,
    });
  }
};
