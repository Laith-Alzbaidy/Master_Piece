const express = require("express");
const Controlleruser = require("../controller/UserController");
const AuthenticateUser = require("../controller/AuthenticateUser");
// const ControllerContinueRegistration = require("../controller/userCompleteProfile");
const router = express.Router();

// Define a route for handling POST and GET requests at the root endpoint "/"
router.route("/").get(Controlleruser.GetUsers);
router.route("/login").post(AuthenticateUser.LoginUser);
router.route("/siginup").post(AuthenticateUser.SignUpUser);

router
  .route("/:id")
  .get(Controlleruser.GetUser)
  .patch(Controlleruser.UpdateUser)
  .delete(Controlleruser.DeleteUser);

// Export the router to be used in other parts of the application
module.exports = router;

// router
//   .route("/ContinueRegistration")
//   .post(ControllerContinueRegistration.ContinueUserRegistration);
