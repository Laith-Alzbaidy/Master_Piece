const User = require("../models/modelUser");
const cloudinary = require("../utils/cloudinary");
// Get all users
exports.GetUsers = async (req, res) => {
  
  try {
    const user = await User.find();
    res.status(200).json({
      result: user.length,
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      massage: err,
    });
  }
};

// Function Controller to Edit specific User
// exports.UpdateUser = async (req, res) => {
//   // Extract the user ID from the params  parameters
//   console.log(req.body);
//   const { firstname, lastname, weight, height, image } = req.body;
//   const userId = req.params.id;

//   console.log("----------", image);
//   // const image = req.file;

//   try {
//     const result = await cloudinary.uploader.upload(image, {
//       folder: "Training",
//       width: 800,
//       height: 600,
//       crop: "limit", // Adjust dimensions as needed
//     });
//     console.log("...................", result);

//     const user = await User.findByIdAndUpdate(
//       userId,
//       { firstname, lastname, weight, height, image },
//       {
//         new: true, // Return the updated document as the result
//       }
//     );
//     // If the user is found, respond with a 200 status code and the user data
//     res.status(200).json({
//       status: "success",
//       data: user,
//     });
//     // Handle errors that occur during database interaction
//   } catch (err) {
//     res.status(404).json({
//       status: "feild",
//       massage: err,
//     });
//   }
// };
exports.UpdateUser = async (req, res) => {
  // Extract the user ID from the params
  const { firstname, lastname, weight, height } = req.body;
  console.log("+++++++++++++++++++++", req.body);
  const userId = req.params.id;
  const image = req.file.path;
  // console.log("+++++++++++++++++++++", image);
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image file provided" });
    }

    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(image, {
      folder: "Training",
      width: 800,
      height: 600,
      crop: "limit",
    });
    // console.log(result);
    // Update the user with the new data including the image URL
    const user = await User.findByIdAndUpdate(
      userId,
      { firstname, lastname, weight, height, image: result.secure_url },
      {
        new: true, // Return the updated document as the result
      }
    );

    // If the user is found, respond with a 200 status code and the user data
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
// exports.UploadImage = async (req, res) => {
//   console.log("------", req.file);
//   const image = req.file.path;
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No image file provided" });
//     }

//     // Upload the image to Cloudinary
//     const result = await cloudinary.uploader.upload(image, {
//       folder: "Training",
//       width: 800,
//       height: 600,
//       crop: "limit",
//     });
//     // If the user is found and the image is associated successfully, respond with a 200 status code and the image URL
//     res.status(200).json({
//       status: "success",
//       data: result.secure_url,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       status: "fail",
//       message: "An error occurred while uploading the image",
//     });
//   }
// };

// exports.UpdateUserImage = async (req, res) => {
//   const userId = req.params.id;

//   const image = req.file.path;
//   console.log("------------", userId);
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No image file provided" });
//     }

//     // Upload the image to Cloudinary
//     const result = await cloudinary.uploader.upload(image, {
//       folder: "Training",
//       width: 800,
//       height: 600,
//       crop: "limit",
//     });

//     // Find the user by their ID and update their image URL
//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { image: result.secure_url },
//       { new: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({
//       status: "success",
//       data: updatedUser,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       status: "fail",
//       message: "An error occurred while updating the user's image",
//     });
//   }
// };

exports.UpdateUserImage = async (req, res) => {
  const userId = req.params.id;

  const { firstname, lastname, weight, height } = req.body;

  console.log("***************", req.body);
  try {
    // Check if an image file is provided
    const user = await User.findById(userId);
    // console.log(user)
    let newimage = user.image;
    // console.log(newimage);
    if (req.file) {
      const image = req.file.path;
      // Upload the image to Cloudinary
      const result = await cloudinary.uploader.upload(image, {
        folder: "Training",
        width: 800,
        height: 600,
        crop: "limit",
      });
      newimage = result.secure_url;
      // console.log("result", result.secure_url);
    }

    console.log();
    // Find the user by their ID and update their image URL, first name, and last name
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { ...req.body, image : newimage },
      {
        new: true,
      }
    );

    console.log("11111111111");

    res.status(200).json({
      status: "success",
      data: updatedUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "fail",
      message: "An error occurred while updating the user's information",
    });
  }
};
