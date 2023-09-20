const Training = require("../models/modelTraining");
const cloudinary = require("../utils/cloudinary");
const Exercise = require("../models/modelExercise");
// const sharp = require("sharp");
// Controller function to create a new training
exports.CreateTraining = async (req, res) => {
  const { name, time, exercises } = req.body;
  const image = req.files["image"] ? req.files["image"][0] : null; // Check if an image is present

  try {
    let imageUrl = null;

    if (image) {
      const result = await cloudinary.uploader.upload(image.path, {
        folder: "Training",
        width: 800,
        height: 600,
        crop: "limit", // Adjust dimensions as needed
      });

      imageUrl = result.secure_url;
    }

    // Create a new training using the data from the request body
    const training = await Training.create({
      image: imageUrl,
      name,
      time,
      exercises,
    });

    // Respond with a 200 status code and the created training data
    res.status(200).json({
      status: "success",
      data: training,
    });
  } catch (err) {
    // Handle errors that occur during database interaction
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

// exports.CreateTraining = async (req, res) => {
//   const { image, name, numexercise, time, exercises } = req.body;

//   try {
//     // Compress and resize the image using sharp
//     const compressedImageBuffer = await sharp(image.buffer)
//       .jpeg({ quality: 70 }) // Adjust compression quality as needed
//       .resize({ width: 800, height: 600, fit: "inside" }) // Adjust dimensions as needed
//       .toBuffer();

//     // Upload the compressed image to Cloudinary
//     const result = await cloudinary.uploader.upload(compressedImageBuffer, {
//       folder: "Training",
//     });

//     // Create a new training using the data from the request body
//     const training = await Training.create({
//       image: {
//         public_id: result.public_id,
//         url: result.secure_url,
//       },
//       name,
//       numexercise,
//       time,
//       exercises,
//     });

//     // Respond with a 200 status code and the created training data
//     res.status(200).json({
//       status: "success",
//       data: training,
//     });
//   } catch (err) {
//     // Handle errors that occur during database interaction or image processing
//     res.status(404).json({
//       status: "failed",
//       message: err,
//     });
//   }
// };

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

exports.DeleteTraining = async (req, res) => {
  const trainingId = req.params.id;

  try {
    // Find the training by its ID
    const training = await Training.findById(trainingId);

    if (!training) {
      return res.status(404).json({
        status: "failed",
        message: "Training not found",
      });
    }

    // Find and delete all associated exercises
    await Exercise.deleteMany({ _id: { $in: training.exercises } });

    // Delete the training itself
    await training.remove();

    // Respond with a 204 status code and no data in the response body
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    // Handle errors that occur during database interaction
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};
