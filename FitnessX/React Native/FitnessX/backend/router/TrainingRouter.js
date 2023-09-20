const express = require("express");
const ControllerTraining = require("../controller/TrainingController");
const router = express.Router();

// Define routes for handling POST and GET requests at the root endpoint "/".

router
  .route("/")
  // .post(ControllerTraining.CreateTraining)
  .get(ControllerTraining.GetAllTraining); // Route for creating a new exercise.

// Define routes for handling GET, PATCH, and DELETE requests at the endpoint "/:id".

module.exports = router;
