const express = require("express");
const ControllerExercise = require("../controller/ExerciseController");
const authorization = require("../controller/AuthenticateUser");
const router = express.Router();

// Define routes for handling POST and GET requests at the root endpoint "/".
router
  .route("/")
  .post(ControllerExercise.CreateExercise) // Route for creating a new exercise.
  .get(ControllerExercise.GetAllExercise); // Route for getting all exercises.

// Define routes for handling GET, PATCH, and DELETE requests at the endpoint "/:id".
router
  .route("/:id")
  .get(ControllerExercise.GetExercise) // Route for getting a specific exercise by its ID.
  .patch(ControllerExercise.UpdateExercise) // Route for updating a specific exercise by its ID.
  .delete(ControllerExercise.DeleteExercise); // Route for deleting a specific exercise by its ID.

module.exports = router;
