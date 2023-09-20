const express = require("express");
const router = express.Router();
const AdminController = require("../controller/AdminController");

router.route("/signup").post(AdminController.CreateAdmin);
router.route("/login").post(AdminController.LoginAdmin);

router.route("/profile").get(AdminController.verifyToken, (req, res) => {
  // At this point, req.admin contains the admin data from the token
  res.status(200).json({
    status: "success",
    admin: req.admin,
  });
});

router.route("/").get(AdminController.GetAllAdmin);
module.exports = router;
