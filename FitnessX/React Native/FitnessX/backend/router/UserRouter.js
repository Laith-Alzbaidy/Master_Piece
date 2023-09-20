const express = require("express");
const Controlleruser = require("../controller/UserController");
const AuthenticateUser = require("../controller/AuthenticateUser");
const ResetPassword = require("../controller/ResetPassword");
// const ControllerContinueRegistration = require("../controller/userCompleteProfile");
const router = express.Router();

// Define a route for handling POST and GET requests at the root endpoint "/"
router.route("/").get(Controlleruser.GetUsers);
router.route("/login").post(AuthenticateUser.LoginUser);
router.route("/siginup").post(AuthenticateUser.SignUpUser);
router.route("/datauser").get(AuthenticateUser.getUserData);
router.route("/layth").post(AuthenticateUser.VerifyUser);

// router.route("/:id").patch(Controlleruser.UpdateUser);
router.route("/:id").patch(Controlleruser.UpdateUserImage);

router.route("/forgotpassword").post(ResetPassword.SendEmailResetPassword);
router.route("/verifyCodePassword").post(ResetPassword.ResetPassword);
router.route("/ChangePassword").post(ResetPassword.ChangePassword);
router.get(
  "/profileWithLogin",
  AuthenticateUser.authenticateTokenLogin,
  (req, res) => {
    // You can access the authenticated user object from req.user
    const user = req.user;
    res.status(200).json({
      status: "success",
      user,
    });
  }
);

// router.route("/verify/:token").get(AuthenticateUser.VerfiyEmail);

// router.route("/upload").post(Controlleruser.UploadImage);
// Export the router to be used in other parts of the application
module.exports = router;

// router
//   .route("/ContinueRegistration")
//   .post(ControllerContinueRegistration.ContinueUserRegistration);
