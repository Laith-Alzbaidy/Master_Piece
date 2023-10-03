const express = require("express");
const router = express.Router();
const ContactUsController = require("../controller/ContactUsController");

router
  .route("/")
  .post(ContactUsController.CreateContactUs)
  .get(ContactUsController.GetContactUs)
  .delete(ContactUsController.DeleteContact);

module.exports = router;
