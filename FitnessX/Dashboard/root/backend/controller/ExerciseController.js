const Training = require("../models/modelTraining");
const Exercise = require("../models/modelExercise");
const cloudinary = require("../utils/cloudinary");

// Controller function to create a new exercise
exports.CreateExercise = async (req, res) => {
  const { repeat, name, description, idTraining } = req.body;
  // console.log("---------------", req.file);
  // console.log("req.body", req.body);
  const image = req.files["image"] ? req.files["image"][0] : null; // Check if an image is present
  const video = req.files["video"] ? req.files["video"][0] : null;

  try {
    let imageUrl = null;
    let videoUrl = null;
    if (image) {
      const imageResult = await cloudinary.uploader.upload(image.path, {
        folder: "Exercise",
        width: 800,
        height: 600,
        crop: "limit", // Adjust dimensions as needed
      });
      imageUrl = imageResult.secure_url;
    }

    if (video) {
      const videoResult = await cloudinary.uploader.upload(video.path, {
        folder: "Exercise Video",
        resource_type: "video",
      });
      videoUrl = videoResult.secure_url;
    }
    // Create a new exercise using the data from the request body
    const exercise = await Exercise.create({
      image: imageUrl,
      video: videoUrl,
      repeat,
      name,
      description,
      idTraining,
    });

    const training = await Training.findById(idTraining);
    // console.log(training.exercises);
    training.exercises.push(exercise._id);
    training.numexercise = training.exercises.length;

    await training.save();

    // Respond with a 200 status code and the created exercise data
    return res.status(200).json({
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

// Controller function to get a specific exercise by ID
exports.GetExercise = async (req, res) => {
  // Extract the exercise ID from the query parameters
  const exerciseId = req.params.id;

  try {
    // Find the exercise by its ID in the database
    const exercise = await Exercise.findById(exerciseId);
    // If the exercise is found, respond with a 200 status code and the exercise data
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

exports.UpdateExercise = async (req, res) => {
  const exerciseId = req.params.id;
  const { name, description, repeat } = req.body;

  try {
    // Get the exercise from the database
    const exercise = await Exercise.findById(exerciseId);

    if (!exercise) {
      return res.status(404).json({
        status: "failed",
        message: "Exercise not found",
      });
    }

    // Update the exercise object with the fields that are present in the request body
    if (name) {
      exercise.name = name;
    }
    if (description) {
      exercise.description = description;
    }

    if (req.files["image"] && req.files["image"][0]) {
      const imageResult = await cloudinary.uploader.upload(
        req.files["image"][0].path,
        {
          folder: "Training",
          width: 800,
          height: 600,
          crop: "limit", // Adjust dimensions as needed
        }
      );

      exercise.image = imageResult.secure_url;
    }

    if (req.files["video"] && req.files["video"][0]) {
      const videoResult = await cloudinary.uploader.upload(
        req.files["video"][0].path,
        {
          folder: "Update Training",
          resource_type: "video",
        }
      );

      exercise.video = videoResult.secure_url;
    }

    if (repeat) {
      exercise.repeat = repeat;
    }

    // Save the updated exercise
    const updatedExercise = await exercise.save();

    // Respond with a 200 status code and the updated exercise data
    res.status(200).json({
      status: "success",
      data: updatedExercise,
    });
  } catch (err) {
    // Handle errors that occur during the database interaction or file uploads
    console.error(err);
    res.status(500).json({
      status: "failed",
      message: "An error occurred while updating the exercise.",
    });
  }
};

// Controller function to delete a specific exercise by ID
exports.DeleteExercise = async (req, res) => {
  const exerciseId = req.params.id;

  try {
    // Find the exercise by its ID and delete it from the database
    const exercise = await Exercise.findByIdAndDelete(exerciseId);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    // Handle errors that occur during database interaction
    res.status(404).json({
      status: "failed",
      massage: err,
    });
  }
};
