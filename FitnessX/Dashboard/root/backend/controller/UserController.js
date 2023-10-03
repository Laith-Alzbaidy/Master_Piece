const User = require("../models/modelUser");

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

//Function Controller to Get specific User
exports.GetUser = async (req, res) => {
  // Extract the user ID from the query parameters
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    // Check if the user with the given ID is not found in the database
    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User not found",
      });
    }
    // If the user is found, respond with a 200 status code and the user data
    res.status(200).json({
      status: "success",
      data: user,
    });
    // Handle errors that occur during database interaction
  } catch (err) {
    res.status(404).json({
      status: "feild",
      massage: err,
    });
  }
};

//Function Controller to Edit specific User
exports.UpdateUser = async (req, res) => {
  // Extract the user ID from the params  parameters
  const userId = req.params.id;
  console.log("--------------", userId, req.body);
  try {
    const user = await User.findByIdAndUpdate(userId, req.body, {
      new: true, // Return the updated document as the result
    });
    // If the user is found, respond with a 200 status code and the user data
    console.log(user);
    res.status(200).json({
      status: "success",
      data: user,
    });
    // Handle errors that occur during database interaction
  } catch (err) {
    res.status(404).json({
      status: "feild",
      massage: err,
    });
  }
};

//Function Controller to Delete specific User
exports.DeleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.status(204).json({
      status: "sucsess",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      massage: err,
    });
  }
};
